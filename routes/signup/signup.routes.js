const User = require('./../../database/models/users.model');

module.exports = (router) => {
    // POST
    router.post('/signup', signup);

    return router;
}

function signup(req, res, next){
    const firstname = req.body.firstname;
    const name = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email)
        .then((user) => {
            if(user){
                return res.json({ success: false, message: 'Already e-mail address existed.' });    
            }

            const signupUser = new User({
                firstname: firstname,
                name: name,
                lastname: lastname,
                email: email,
                password: password,
                created: new Date()
            });

            return User.create(signupUser);
        })
        .then((user) => {
            return res.json({ success: true, message: 'Signup successful' });
        })
        .catch((err) => {
            res.json(err);
        });
}