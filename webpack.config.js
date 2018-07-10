const webpack = require('webpack')
const path = require('path');

const common = {
  context: __dirname + '/client',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'stage-0']
        }
      }
    ]
  }
}

const client = {
  entry: './client.js',
  output: {
    path: __dirname + '/client/dist',
    filename: 'app.js'
  }
};

const server = {
  entry: './server.js',
  target: 'node',
  output: {
    path: __dirname + '/client/dist',
    filename: 'app-server.js',
    libraryTarget: 'commonjs-module'
  }
}

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server)
]