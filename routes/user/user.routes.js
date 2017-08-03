const auth = require('./../../middlewares/authenticate.middleware');
const User = require('./../../database/models/users.model');

function getUser(req, res, next){
    User.getUsers((err, users) => {
        if(err){
            throw err;
        }

        return res.json(users);
    });
}

function getUserById(req, res, nex){
    const id = req.params.id;
    User.getUserById(id, (err, user) => {
        if(err){
            throw err;
        }

        return res.json(user);
    });
}

module.exports = (router) => {
    // GET
    router.get('/users', auth, getUser);
    router.get('/users/:id', auth, getUserById);

    // POST

    // PUT
    
    // DELETE

    return router;
};
