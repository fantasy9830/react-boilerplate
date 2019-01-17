const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('antd', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  fixBabelImports('ant-design-pro', {
    libraryName: 'ant-design-pro',
    libraryDirectory: 'lib',
    style: 'css',
    camel2DashComponentName: false,
  }),
);
