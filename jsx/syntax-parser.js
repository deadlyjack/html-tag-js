module.exports = () => ({
  manipulateOptions: (opts, parserOpts) => {
    parserOpts.plugins.push('jsx');
  },
});
