const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('Users', usersSchema);

// Get Users
module.exports.getUsers = (callback, limit) => {
    return User.find(callback).limit(limit);
}

// Get User By ID
module.exports.getUserById = (id, callback) => {
    return User.findById(id, callback);
}

// Get User By E-mail
module.exports.getUserByEmail = (email, callback) => {
    return User.findOne({ email: email }, callback);
}
