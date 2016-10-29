const webpack = require('webpack');
const Config = require('webpack-config').Config;

var DashboardPlugin = require('webpack-dashboard/plugin');

const config = new Config().extend('./webpack.config.js').merge({
  // define externals that are otherwise available
  externals: {
    'react/addons': true,
    'react/lib/ReactContext': true,
    'react/lib/ExecutionEnvironment': true,
    'mocha': true
  },
  plugins: [
    // Enable dashboard
    new DashboardPlugin()
  ]
});

// override entry point to run tests automatically
config.entry = 'mocha!./src/test/setup.js';

// export the final configuration
module.exports = config;
