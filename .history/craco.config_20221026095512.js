const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#ff0000' ,
              '@link-color': '#ff0000', // 链接色
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};