var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

//map our app to build/bundle.js and generate build/index.html
const PATHS  = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  //Entry accepts a path or an object of entries.
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Kanban app'
    })
  ]
};