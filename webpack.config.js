const path = require('path');

module.exports = (webpack, options) => {
  const { mode = 'production' } = options;
  return {
    context: __dirname,
    mode,
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
  }
};
