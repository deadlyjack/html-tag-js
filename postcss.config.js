module.exports = ({
  file,
  options,
  env
}) => ({
  parser: file.extname === '.sss' ? 'sugarss' : false, // Handles `.css` && '.sss' files dynamically
  plugins: {
    'postcss-cssnext': {},
    'cssnano': env === 'production' ? {} : false
  }
})