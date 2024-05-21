// .eslintrc.js
module.exports = {
  root: true, // 这个配置文件是ESLint配置的根文件，ESLint会停止在父级目录中查找配置文件
  env: {
    node: true, // 启用Node.js全局变量和Node.js作用域
    es6: true, // 启用ES6语法支持
    browser: true // 启用浏览器全局变量
  },
  parserOptions: {
    parser: 'babel-eslint', // 使用babel-eslint作为解析器
    ecmaVersion: 2020, // 启用ES2020语法支持
    sourceType: 'module' // 模块化导入导出语法
  },
  extends: [
    "plugin:vue/vue3-recommended", // 使用eslint-plugin-vue插件的推荐规则
    'eslint:recommended', // 使用ESLint推荐的规则
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 在生产环境中禁止使用console，其他环境中允许使用
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 在生产环境中禁止使用debugger，其他环境中允许使用
    'indent': ['error', 2], // 强制使用两个空格进行缩进
    // 'linebreak-style': ['error', 'unix'], // 强制使用Unix风格的换行符
    // 'quotes': ['error', 'single'], // 强制使用单引号
    // 'semi': ['error', 'always'], // 强制在语句末尾使用分号
    'no-unused-vars': ['warn'], // 警告未使用的变量
    // 'no-var': ['error'], // 禁止使用var，推荐使用let和const
    'comma-dangle': ['error', 'never'], // 禁止使用尾随逗号
    'eqeqeq': ['error', 'always'], // 要求使用 === 和 !==
    'curly': 'off', // 要求遵循大括号约定
    'camelcase': ['error', {properties: 'always'}], // 强制使用驼峰命名法
    'brace-style': ['error', '1tbs', { allowSingleLine: true }], // 强制在代码块中使用一致的大括号风格
    'array-bracket-spacing': ['error', 'never'], // 在数组括号内强制实现一致的间距
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "off",
    'typescript-eslint/no-var-requires': 'off',
    "extends": ["plugin:vue/vue3-recommended"],
    "parserOptions": {
      "parser": "@typescript-eslint/parser"
    }
  }
}
