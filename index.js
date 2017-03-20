'use strict';

module.exports = {
    env: {
        mocha: true,
        node: true
    },
    extends: [
        'hapi'
    ],
    rules: {
        'no-undef': ['error']
    }
};
