const path = require('path');

module.exports = {
  context: __dirname,
  mode: "production",
  entry: {
    tag: "./src/tag.js",
    polyfill: './src/polyfill.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'tag',
    libraryExport: 'tag',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
};