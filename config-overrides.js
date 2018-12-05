const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  // 使用 babel-plugin-import - [antd]
  config = injectBabelPlugin(
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'es', style: 'css' },
      'antd',
    ],
    config,
  );

  // 使用 babel-plugin-import - [ant-design-pro]
  config = injectBabelPlugin(
    [
      'import',
      {
        libraryName: 'ant-design-pro',
        libraryDirectory: 'lib',
        style: 'css',
        camel2DashComponentName: false,
      },
      'ant-design-pro',
    ],
    config,
  );

  return config;
};
