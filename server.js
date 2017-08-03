const express = require('express');
const app = express();
const env = require('./environment');

// Configuration
require('./config')(app);

// Extensions
require('./extensions')(app);

// Connect Database
require('./database/mongoose')();

// Routes
require('./routes')(app);

// Server Listening
app.listen(env.application.PORT, () => {
    console.log('Server running at port ' + env.application.PORT + ' (' + env.application.MODE + ')');
});