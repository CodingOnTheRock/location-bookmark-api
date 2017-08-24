const bcrypt = require('bcrypt');

const crypto = module.exports;

module.exports.genHash = (value, round) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(round)
            .then((salt) => {
                bcrypt.hash(value, salt)
                    .then((hash) => {
                        resolve(hash);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            })
            .catch((err) => {
                reject(err);
            });
    });
}

module.exports.compareHash = (plainText, cipherText) => {
    return bcrypt.compareSync(plainText, cipherText);
}
