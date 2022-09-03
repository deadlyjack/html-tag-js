module.exports = (source) => {
  const sourceHasTagJsUsed = /tag\(/.test(source);
  const sourceNoImportTagJS = source.search(/import tag from ['"]html-tag-js['"]/) >= 0;

  if (sourceHasTagJsUsed && !sourceNoImportTagJS) {
    source = `import tag from 'html-tag-js';\n${source}`;
  }
  return source;
};
