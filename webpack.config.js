var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/app/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var port = process.env.PORT || 8080;
var host = process.env.IP || '127.0.0.1';

var config = {
   entry: APP_DIR + '/App.jsx',
	
   output: {
      path: BUILD_DIR,
      filename: 'bundle.js',
      //publicPath: '/dist/'
   },
   
   devServer: {
      inline: true,
      port: port,
      host: host
   },
   
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            //include: APP_DIR,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
   resolve: {
      root: path.resolve(__dirname,'./src/public'),
   }
}

module.exports = config;