let config = {}

// Application
config.application = {};
config.application.MODE = 'production';
config.application.PORT = 10000;
config.application.public_folder = '/public/dist';

// Application -> Security
config.application.security = {};
config.application.security.secret_key = 'p@ssw0rd';
config.application.security.expire = 86400 // In seconds (24 hours)

// Application -> Security -> Header
config.application.security.header = {};

// Application -> Security -> Header -> Key
config.application.security.header.keys = {};
config.application.security.header.keys.token = 'Token';

// Application -> Route
config.application.route = {};
config.application.route.prefix = '/api';

// Database
config.database = {}
config.database.uri = 'mongodb://localhost:27017/db';

module.exports = config;