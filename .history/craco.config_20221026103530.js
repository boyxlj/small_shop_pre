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
              // '@primary-color': '#ff6700', // 蓝黑色
              // '@success-color': '#5ecdc4', // 湖绿色
              // '@warning-color': '#6d4cc2', // 紫色
              // '@error-color': '#e64a19', // git桔色
            },
            javascriptEnabled: true, // 允许使用js修改less文件，必须为true，否则无法生效
          },
        },
      },
    },
  ],
}