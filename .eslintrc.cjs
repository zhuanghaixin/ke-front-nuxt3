/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    // 基础
    'eslint:recommended',

    'plugin:vue/vue3-essential',
    'plugin:nuxt/recommended',
    // 语言
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 'off'
  },
  overrides: [
    {
      files: ['server/**'],
      parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser'
      },
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint']
    }
  ]
}
