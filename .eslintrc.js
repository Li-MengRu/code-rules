/*
 * @Author: limenguru
 * @Date: 2022-03-18 09:32:37
 * @LastEditTime: 2022-04-13 19:33:23
 * @LastEditors: limenguru
 * @Description:
 * @FilePath: /code-rules/.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'eslint:recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'block-scoped-var': 2, // var变量提升
    'block-spacing': 0, // 语句之间用强制使用空格隔开
    allowSingleLine: 0,
    'no-unused-vars': 2,
    'comma-dangle': ['error', 'never'], // 对于数组或者对象的属性最后一个后面去掉逗号
    eqeqeq: 1, // 使用强等号
    'func-call-spacing': ['error'], // 函数名和（）之间放在一行，不换行
    'global-require': 1, // require语句提升到文件顶部
    indent: ['error', 2], // 缩进两格
    complexity: ['error', 6], // 控制圈复杂度不能超过6
    'max-len': 1, // 单行代码最长不超过80
    'max-lines': 1, // 文件大小不超过300行
    'max-nested-callbacks': ['error', 3], // 回调函数最多嵌套三层
    'multiline-comment-style': ['error', 'starred-block'], // 备注信息两行双斜杠的合并成/* */
    'multiline-ternary': 1, // 三元表达式换行隔开
    'new-parens': 1, // new关键字调用不带参数的构造函数时增加（）
    'newline-per-chained-call': 1, // 调用链接方法换行
    'no-await-in-loop': 1, // for循环里不能有await，建议使用promise.all（）
    'no-const-assign': 1, // const不能被修改
    'no-duplicate-imports': 1, // 合并导入   没生效
    'no-else-return': 1, // if语句中return后不需要else
    'no-empty': 2, // 不允许空块语句
    'no-empty-function': 0, // 消除空功能
    'no-extra-semi': 1, // 替换不必要的分号
    'no-fallthrough': 1, // switch语句中缺少的break
    'no-floating-decimal': 1, // 小数点前后缺少数字时警告
    'no-lonely-if': 1, // if else 语句合并
    'no-multi-assign': 1, // 禁止链接变量赋值
    'no-multiple-empty-lines': 1, // 最多两行空行
    'no-nested-ternary': 1, // 不允许嵌套三元表达式
    'no-proto': 1, // __proto__弃用，改用getPrototypeOf
    'no-undef-init': 1, // 消除初始化变量值为undefined的
    'no-var': 1, // 声明变量尽量使用let const
    'object-shorthand': 1, // 简化对象字面值方法和属性
    'prefer-template': 1, // 拼接字符串用模板文字而不是字符串串联
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-shadow': 'off',
    'no-continue': '1'
  }
};
