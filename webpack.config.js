const path = require('path');

module.exports = {
  context: __dirname,
  mode: "production",
  entry: {
    tag: "./src/tag.js",
    comboBox: './src/comboBox.js',
    html: './src/index.js',
    togger: './src/toggleSwitch.js',
    bubble: './src/bubble.js',
    rangeSlider: './src/rangeSlider.js',
    tooltip: './src/tooltip.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'html',
    libraryExport: 'default',
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
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ]
      }
    ]
  }
};