'use strict';

module.exports = {
    env: {
        node: true,
    },
    extends: [
        'hapi'
    ],
    rules: {
        'no-undef': ['error'],
        'hapi/hapi-capitalize-modules': 0,
        'comma-dangle': ['error', {
            'arrays': 'never',
            'objects': 'always',
            'imports': 'always',
            'exports': 'always',
            'functions': 'never',
        }],
    },
};
