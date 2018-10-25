var express = require('express');
var api = require('./api/api');
var config = require('./config/config');
require('mongoose').connect(config.db.url);

var app = express();

// setup the app middlware
require('./middleware/appMiddleware')(app);

// setup the api
app.use('/api', api);

// export the app for testing
module.exports = app;