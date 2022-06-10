module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    quotes: ['warn', 'double'],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    'block-scoped-var': 2, // var变量提升
    'block-spacing': 1, // 语句之间用强制使用空格隔开
    'no-unused-vars': 1,
    eqeqeq: 1, // 使用强等号
    'func-call-spacing': ['error'], // 不允许函数名和调用它的左括号之间有空格
    'global-require': 1, // require语句提升到文件顶部
    indent: ['error', 2], // 缩进两格
    complexity: ['error', 6], // 控制圈复杂度不能超过6
    'max-len': ['error', {'code': 160}], // 单行代码最长不超过160
    'max-lines': 1, // 文件大小不超过300行
    'max-nested-callbacks': ['error', 3], // 回调函数最多嵌套三层
    'multiline-comment-style': ['error', 'starred-block'], // 备注信息两行双斜杠的合并成/* */
    'new-parens': 1, // new关键字调用不带参数的构造函数时增加（）
    'newline-per-chained-call': 1, // 链式调用方法换行
    'no-await-in-loop': 1, // for循环里不能有await，建议使用promise.all（）
    'no-const-assign': 1, // const不能被修改
    'no-duplicate-imports': ["error", { "includeExports": true }], // 合并导入
    'no-else-return': 2, // if语句中return后不需要else
    'no-empty': 1, // 块语句中的内容不能为空
    'no-empty-function': 1, // 消除空功能
    'no-extra-semi': 2, // 替换不必要的分号
    'no-fallthrough': 2, // switch语句中缺少的break
    'no-floating-decimal': 1, // 小数点前后缺少数字时警告
    'no-lonely-if': 2, // else if 语句合并
    'no-multi-assign': 2, // 禁止链式赋值
    'no-multiple-empty-lines': 1, // 最多两行空行
    'no-nested-ternary': 2, // 不允许嵌套三元表达式
    'no-proto': 2, // __proto__弃用，改用getPrototypeOf
    'no-undef-init': 1, // 消除初始化变量值为undefined的
    'no-var': 2, // 声明变量尽量使用let const
    'object-shorthand': 1, // 简化对象字面值方法和属性
    'prefer-template': 1, // 拼接字符串用模板文字而不是字符串串联
    'no-shadow': 2,
    'no-continue': 1,
    'comma-dangle': ['error', 'only-multiline'] // 禁止使用尾逗号
  }
};
