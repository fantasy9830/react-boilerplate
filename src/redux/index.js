const req = require.context('./', false, /\.js$/);
const paths = req.keys().filter((item) => item !== './index.js');

export default paths.reduce((result, path) => {
  const index = path
    .split(/(\\|\/)/g)
    .pop()
    .split(/\.js$/)
    .shift();

  result[index] = req(path).default || {};

  return result;
}, []);
