'use strict';

module.exports = {
    env: {
        node: true,
    },
    extends: [
        'hapi',
    ],
    rules: {
        'no-undef': ['error'],
        'hapi/hapi-capitalize-modules': 0,
        'comma-dangle': ['error', {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'never',
        }],
    },
};
