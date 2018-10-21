module.exports = {
  extends: 'eslint-config-airbnb',
  parser: 'babel-eslint',
  plugins: [
    'markdown',
    'flowtype',
  ],
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
    'flowtype/define-flow-type': 1,
    'flowtype/use-flow-type': 1,
    'no-console': [1, {allow: ['warn', 'error', 'info']}],
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': ['error', {props: false}],
    'react/destructuring-assignment': 'off',
    'prefer-destructuring': 'off'
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: { experimentalObjectRestSpread: true },
  },
  files: [{
    files: ['*.md'],
    rules: {
      'no-unused-vars': 'off',
      'import/no-unresolved': 'off',
      'react/button-has-type': 'off',
      'react/prop-types': 'off',
      'jsx-a11y/label-has-for': 'off',
      'jsx-a11y/label-has-associated-control': 'off'
    }
  }],
};
