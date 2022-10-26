const CracoLessPlugin = require('craco-less')
module.exports = {
  plugins: [
    {
       // 使用CracoLessPlugin自定义主题颜色
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
          // 自定义less变量
            modifyVars: {
              '@primary-color': '#ff6700', // 蓝黑色
              '@success-color': '#ff6700', // 湖绿色
              '@warning-color': '#ff6700', // 紫色
              '@error-color': '#ff6700', // git桔色
            },
            javascriptEnabled: true, 
        },
      },
    },
  ],
}