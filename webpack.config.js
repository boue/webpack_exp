var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpack = require('webpack');

//map our app to build/bundle.js and generate build/index.html
const TARGET = process.env.npm_lifecycle_event;
const PATHS  = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  //Entry accepts a path or an object of entries.
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Kanban app'
    })
  ]
};

if(TARGET === 'start' || !TARGET){
  module.exports = merge(common, {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      //display only errors to reduce the amount of output.
      stats: 'errors-only',

      //parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if(TARGET === 'build'){
  module.exports = merge(common, {});
}