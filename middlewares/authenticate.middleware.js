const jwt = require('jsonwebtoken');
const env = require('./../environment');

module.exports = (req, res, next) => {
    const token = req.query.token || req.headers['authorization'];

    if(token){
        const secret = env.application.security.token.secret;
        const token_key = env.application.security.header.keys.token;

        jwt.verify(token, secret, (err, decoded) => {
            if(err){
                return res.json({ success: false, message: 'Authentication failed.' });
            }
            else{
                res.header(token_key, token);
                req.decoded = decoded;

                next();
            }
        });
    }
    else{
        return res.status(403).send({
            succes: false,
            message: 'No token provided.'
        });
    }
}
