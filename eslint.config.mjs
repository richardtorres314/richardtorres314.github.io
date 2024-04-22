import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  { languageOptions: { globals: globals.browser } },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.tsx'],
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'import'],
    extends: [
      'plugin:react-recommended',
      'next/core-web-vitals',
      'prettier'
    ]
  }
];
