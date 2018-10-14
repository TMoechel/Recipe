var _ = require('lodash');

// deafult config object for our api
var config = {
  /* just placing the name of our possible NODE_ENV values for later*/
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000
};

// check to see if the NODE_ENV was set, if not, the set it to dev
process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

// set config.env to whatever the NODE_ENV is
var envConfig;

try {
  //dynamically load the config for the given environment
  envConfig = require('./' + config.env);
  envConfig = envConfig || {};

} catch (error) {
   envConfig = {};
}

config.env = process.env.NODE_ENV;

module.exports = _.merge(config, envConfig);
