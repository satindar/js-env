// This file is not transpiled, so must use CommonJS and ES5

// Require babel to transpile (other files) before our tests are run.
require('babel-register')();

// Disable Webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
