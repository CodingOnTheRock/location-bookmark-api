const auth = require('./../../middlewares/authenticate.middleware');
const filesystem = require('./../../core/utils/filesystem');
const text = require('./../../core/utils/text');
const User = require('./../../database/models/users.model');
const env = require('./../../environment');

const multer = require('multer');
const USER_RESOURCES_DIR = env.application.modules.user.path;
const USER_PHOTO_PATH = env.application.modules.user.photo.path;
const FIELD_NAME = env.application.modules.user.photo.field_name;
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const uid = req.decoded._doc._id;
        const path = USER_RESOURCES_DIR + uid + USER_PHOTO_PATH;

        // Create folder
        filesystem.createDirectory(path);

        callback(null, path);
    },
    filename: (req, file, callback) => {
        const uid = req.decoded._doc._id;
        const extension = filesystem.getFileExtension(file.originalname);
        const filename = uid + '_' + Date.now() + extension; 

        callback(null, filename);
    }
});
const uploader = multer({ 
    storage: storage,
    fileFilter: photoFilter 
}).single(FIELD_NAME);

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

function uploadPhoto(req, res, next){
    uploader(req, res, (err) => {
        const message = { success: false, message: '' };
        
        // Check error (included file extension accept)
        if (err) {
            message.message = err;
            return res.status(400).json(message);
        }

        // Check file size accept
        const limit = env.application.modules.user.photo.size_limit;
        const limitUnit = env.application.modules.user.photo.size_limit_unit;
        const isValidFileSize = filesystem.isAcceptFileSize(req.file.size, limit, limitUnit);
        if(!isValidFileSize){
            // Remove uploaded file
            filesystem.removeFile(req.file.path);

            const fileSizeLimit = env.application.modules.user.photo.size_limit;
            const fileSizeLimitUnit = env.application.modules.user.photo.size_limit_unit;
            message.message = 'File size should be less than ' + fileSizeLimit + ' ' + fileSizeLimitUnit;

            return res.status(400).json(message);
        }

        // Update user's photo
        const uid = req.decoded._doc._id;
        const filePath = req.file.path;
        updateUserPhoto(uid, filePath);

        message.success = true;
        return res.json(message);
    });
}

function photoFilter(req, file, callback){
    // Check mime type accept
    const mimeTypes = env.application.modules.user.photo.mime_type;
    const isValidMimeType = filesystem.isAcceptMimeType(file.mimetype, mimeTypes);
    if(!isValidMimeType){
        const mimeTypes = env.application.modules.user.photo.mime_type;
        const message = 'Support mime types: ' + mimeTypes.join(', ') + ' only';

        callback(message);
    }

    callback(null, true);
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

function updateUserPhoto(uid, filePath){
    User.getUserById(uid)
        .then((user) => {
            const newFilePath = text.replaceAll(filePath, '\\', '/');
            user.photo = newFilePath;

            return User.updateUser(uid, user);
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
    router.post('/users/:id/photo', auth, uploadPhoto);

    // PUT
    router.put('/users/:id', auth, updateUser);
    
    // DELETE
    router.delete('/users/:id', auth, deleteUser);

    return router;
};
