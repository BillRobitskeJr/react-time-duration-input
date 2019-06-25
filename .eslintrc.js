module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jest/globals': true
  },
  'extends': [
    'standard',
    'standard-react'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'jest'
  ],
  'rules': {
    'jsx-quotes': [ 'error', 'prefer-double' ]
  }
}
