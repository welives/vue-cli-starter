module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
