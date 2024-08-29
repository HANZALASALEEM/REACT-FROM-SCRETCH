import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] }, //? ESLint rules are only apply on these files
  { languageOptions: { globals: globals.browser } }, //? For this we can use brower specific globles like window and document
  pluginJs.configs.recommended, //? This applies all the recommended rules that are essential for best practices
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended
];
