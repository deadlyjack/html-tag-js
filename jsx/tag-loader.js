module.exports = (source) => {
  // if tag(), tag.use(), tag.get() is used in source, then import tag from 'html-tag-js'
  const sourceHasTagJsUsed = source.search(/tag((\.(use|get|getAll)\()|\()/) >= 0;
  const sourceNoImportTagJS = source.search(/import tag from ['"]html-tag-js['"]/) >= 0;

  if (sourceHasTagJsUsed && !sourceNoImportTagJS) {
    source = `import tag from 'html-tag-js';\n${source}`;
  }
  return source;
};
