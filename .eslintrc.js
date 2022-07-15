module.exports = {
  env: {
    'jest/globals': true,
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'jest',
    'react'
  ],
  rules: {
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
