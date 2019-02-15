const req = require.context('./', false, /\.ts$/);
const paths = req.keys().filter(item => item !== './index.ts' && item !== './states.d.ts');

export default paths.reduce((result: string[], path: any) => {
  const index = path
    .split(/(\\|\/)/g)
    .pop()
    .split(/\.ts$/)
    .shift();

  result[index] = req(path).default || {};

  return result;
}, []);
