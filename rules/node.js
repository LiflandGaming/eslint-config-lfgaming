'use strict';

module.exports = {
  env: {
    node: true
  },
  extends: [
    'hapi'
  ],
  rules: {
    'no-undef': ['error'],
    'hapi/hapi-capitalize-modules': 0
  }
};
