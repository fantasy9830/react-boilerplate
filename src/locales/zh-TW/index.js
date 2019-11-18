const req = require.context('./', false, /\.json$/);

export default req.keys().reduce((result, path) => {
  const index = path
    .split(/(\\|\/)/g)
    .pop()
    .split(/\.json$/)
    .shift();

  result[index] = req(path) || {};

  return result;
}, {});
