const path = require('path');
const {merge} = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  }
});