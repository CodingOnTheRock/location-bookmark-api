const jwt = require('jsonwebtoken');
const crypto = require('./../../core/utils/crypto');
const auth = require('./../../middlewares/authenticate.middleware');
const User = require('./../../database/models/users.model');
const env = require('./../../environment');

module.exports = (router) => {
    // GET
    router.get('/profile', auth, getProfile);

    // POST
    router.post('/authenticate', authenticate);

    return router;
}

function getProfile(req, res, next){
    return res.json({ success: true, decoded: req.decoded });
}

function authenticate(req, res, next){
    const username = req.body.username;
    const password = req.body.password;
    let currentUser = null;

    User.getUserByEmail(username)
        .then((user) => {
            if(!user){
                return res.json({ success: false, message: 'Authentication failed. User not found.' });    
            }

            currentUser = user;
            const salt_factor = env.application.security.encryption.salt_factor;

            return crypto.genHash(password, salt_factor);
        })
        .then((hashPassword) => {
            const isPasswordMatch = crypto.compareHash(password, currentUser.password);

            if(!isPasswordMatch){
                return res.json({ success: false, message: 'Authentication failed. Incorrect password.' });
            }
            
            const secret = env.application.security.token.secret;
            const token_key = env.application.security.header.keys.token;
            const expire = env.application.security.token.expire;
            const token = jwt.sign(currentUser, secret, {
                expiresIn: expire 
            });
            
            res.header(token_key, token);
            res.json({
                success: true,
                message: 'Authenticated.',
                token: token
            });
        })
        .catch((err) => {
            res.json(err);
        });
}
