/* eslint-disable no-undef */
module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
   ],
   overrides: [],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   settings: {
      react: {
         version: 'detect',
      },
   },
   plugins: ['react', '@typescript-eslint', 'prettier'],
   ignorePatterns: ['node_modules/'],
   rules: {
      'no-console': ['error'],
      'react/no-unknown-property': ['error', { ignore: ['jsx', 'global', 'object', 'intensity', 'position', 'rotation', 'penumbra', 'scale'] }],
      'react/react-in-jsx-scope': 'off',
      quotes: ['error', 'single',{ 'allowTemplateLiterals': true }],
      indent: ['error', 3],
   },
};
