module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        modules: 'commonjs'
      }
    ],
    [
      '@babel/preset-react'
    ],
    [
      '@babel/preset-typescript'
    ]
  ],
  plugins: [
    '@babel/plugin-transform-runtime', // @babel/runtime 把所有语法转换会用到的辅助函数都集成在了一起，@babel/plugin-transform-runtime 将辅助函数自动引入
    'react-refresh/babel', // react 组件热更新
  ]
};
