const express = require('express');
const router = express.Router();

const env = require('./../environment');

module.exports = (app) => {
    // Authenticate
    require('./authenticate/authenticate.routes')(router);

    // Signup
    require('./signup/signup.routes')(router);

    // User
    require('./user/user.routes')(router);

    // Route Prefix
    app.use(env.application.route.prefix, router);
};
