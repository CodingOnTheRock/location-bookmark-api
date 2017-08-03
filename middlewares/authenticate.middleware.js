const jwt = require('jsonwebtoken');
const env = require('./../environment');

module.exports = (req, res, next) => {
    const token = req.query.token || req.headers['authorization'];

    if(token){
        jwt.verify(token, env.application.security.secret_key, (err, decoded) => {
            if(err){
                return res.json({ success: false, message: 'Authetication failed.' });
            }
            else{
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
