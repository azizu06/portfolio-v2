import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['webpack.config.js'],
  },
  js.configs.recommended,
  prettier,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        document: 'readonly',
        window: 'readonly',
      },
      env: {
        browser: true,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
