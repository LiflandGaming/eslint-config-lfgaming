'use strict';

module.exports = {
    'env': {
        'commonjs': true,
        'mocha': true,
    },
    parserOptions: {
        "ecmaVersion": 8,
        "sourceType": "module",
    },
    rules: {
        'no-console': 0,
        'no-unused-vars': [1, { 'vars': 'local', 'args': 'none' }],
    },
};
