const auth = require('./../../middlewares/authenticate.middleware');
const User = require('./../../database/models/users.model');

function getUsers(req, res, next){
    User.getUsers()
        .then((users) => {
            return res.json(users);
        })
        .catch((err) => {
            return res.json(err);
        });
}

function getUserById(req, res, next){
    const id = req.params.id;

    User.getUserById(id)
        .then((user) => {
            return res.json(user);
        })
        .catch((err) => {
            return res.json(err);
        });
}

function createUser(req, res, next){
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        created: new Date()
    });

    User.createUser(user)
        .then((user) => {
            return res.json(user);
        })
        .catch((err) => {
            return res.json(err);
        });
}

function updateUser(req, res, next){
    const id = req.params.id;
    const updateUser = req.body;

    User.getUserById(id)
        .then((user) => {
            return User.updateUser(user._id, updateUser);
        })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            return res.json(err);
        });
}

function deleteUser(req, res, next){
    const id = req.params.id;

    User.deleteUser(id)
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            return res.json(err);
        });
}

module.exports = (router) => {
    // GET
    router.get('/users', auth, getUsers);
    router.get('/users/:id', auth, getUserById);

    // POST
    router.post('/user', auth, createUser);

    // PUT
    router.put('/users/:id', auth, updateUser);
    
    // DELETE
    router.delete('/users/:id', auth, deleteUser);

    return router;
};
