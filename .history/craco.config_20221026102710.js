/*
 * @Author: Mujey ?
 * @Date: 2021-08-12 14:44:33
 */
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
              '@primary-color': '#282c34', // 蓝黑色
              '@success-color': '#5ecdc4', // 湖绿色
              '@warning-color': '#6d4cc2', // 紫色
              '@error-color': '#e64a19', // git桔色
            },
            javascriptEnabled: true, // 允许使用js修改less文件，必须为true，否则无法生效
          },
        },
      },
    },
  ],
  // 配置babel-plugin-import按需引用
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true,
        },
      ],
    ],
  },
}

