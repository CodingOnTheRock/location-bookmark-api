const path = require('path');

const auth = require('./../../middlewares/authenticate.middleware');
const text = require('./../../core/utils/text');
const User = require('./../../database/models/users.model');
const photo = require('./../../modules/user/photo.module');
const env = require('./../../environment');

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

function getUserPhoto(req, res, next){
    const uid = req.params.uid;
    const photo = req.params.photo;

    const basePath = process.cwd();
    const usersPath = env.application.modules.user.path;
    const photoPath = env.application.modules.user.photo.path;
    const filePath = path.join(basePath, usersPath, uid, photoPath, photo);

    res.sendFile(filePath);
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

function uploadPhoto(req, res, next){
    const message = { success: false, message: '' };

    photo.upload(req, res)
        .then(() => {
            // Update user's photo
            const uid = req.decoded._doc._id;
            const filePath = req.file.path;
            const newFilePath = text.replaceAll(filePath, '\\', '/');
            User.updateUserPhoto(uid, newFilePath)
                .then((user) => {});

            message.success = true;
            return res.json(message);
        })
        .catch((err) => {
            message.message = err;
            return res.status(400).json(message);
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

module.exports = (app, router) => {
    // GET
    router.get('/users', auth, getUsers);
    router.get('/users/:id', auth, getUserById);
    app.get('/resources/users/:uid/photo/:photo', getUserPhoto);

    // POST
    router.post('/user', auth, createUser);
    router.post('/users/:id/photo', auth, uploadPhoto);

    // PUT
    router.put('/users/:id', auth, updateUser);
    
    // DELETE
    router.delete('/users/:id', auth, deleteUser);

    return router;
};
