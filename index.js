module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    './rules/best-practices',
    './rules/complexity',
    './rules/errors',
    './rules/imports',
    './rules/node',
    './rules/react-a11y',
    './rules/react-hooks',
    './rules/react-perf',
    './rules/react',
    './rules/style',
    './rules/typescript',
    './rules/variables',
  ].map(require.resolve),

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      generators: true,
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },

  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'react-perf',
    'import',
    'jsx-a11y',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
