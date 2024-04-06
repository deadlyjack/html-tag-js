const path = require('path');

module.exports = (webpack, options) => {
  const { mode = 'development' } = options;
  return [{
    context: __dirname,
    mode,
    entry: {
      Ref: "./src/ref.js",
      tag: "./src/tag.js",
      polyfill: './src/polyfill.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      library: '[name]',
      libraryExport: 'default',
      libraryTarget: 'umd',
      globalObject: 'this',
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      }]
    },
  }]
};
