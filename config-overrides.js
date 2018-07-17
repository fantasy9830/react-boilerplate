const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  // 使用 babel-plugin-import - antd
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', style: true }],
    config,
  );

  // 使用 babel-plugin-import - ant-design-pro
  /*
  config = injectBabelPlugin(
    [
      'import',
      {
        libraryName: 'ant-design-pro',
        libraryDirectory: 'lib',
        style: true,
        camel2DashComponentName: false,
      },
    ],
    config,
  );
  */

  // 自定義主題
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: {
      '@font-size-base': '14px',
      '@input-height-base': '36px',
      '@input-height-lg': '42px',
    },
  })(config, env);

  return config;
};
