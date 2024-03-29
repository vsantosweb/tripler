const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: true,
  }),
   addLessLoader({
    lessOptions: {
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#673ab7', '@secondary-color': '#9c27b0' },
      },
    }),
);