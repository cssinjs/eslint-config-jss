module.exports = {
  extends: 'eslint-config-airbnb',
  parser: 'babel-eslint',
  rules: {
    eqeqeq: ['error', 'smart'],
    'react/jsx-filename-extension': 'off',
    'guard-for-in': 'off',
    'no-unexpected-multiline': 'error',
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-plusplus': 'off',
    'no-continue': 'off',
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: { experimentalObjectRestSpread: true },
  },
};
