const jwt = require('jsonwebtoken');
const auth = require('./../../middlewares/authenticate.middleware');
const User = require('./../../database/models/users.model');
const env = require('./../../environment');

function getProfile(req, res, next){
    return res.json({ success: true, decoded: req.decoded });
}

function authenticate(req, res, next){
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByEmail(username, (err, user) => {
        if(err){
            throw err;
        }

        if(!user){
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        }
        else{
            if(user.password !== password){
                res.json({ success: false, message: 'Authentication failed. User not found.' });
            }
            else{
                const token = jwt.sign(user, env.application.security.secret_key, {
                    expiresIn: env.application.security.expire 
                });
                
                res.header(env.application.security.header.keys.token, token);
                res.json({
                    success: true,
                    message: 'Authenticated.',
                    token: token
                });
            }
        }
    });
}

module.exports = (router) => {
    // GET
    router.get('/profile', auth, getProfile);

    // POST
    router.post('/authenticate', authenticate);

    return router;
}
