/**
 * Конфигурация eslint для Webpractik
 */

'use strict';

module.exports = {
    "extends": ["eslint:recommended", "plugin:react/recommended", "google"],
    "env": {
        "browser": true,
        "jquery": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "parser": "babel-eslint",
    "rules": {
        "indent": ["error", 4],
        "no-var": "off",
        "no-invalid-this": "off",
        "no-duplicate-imports": "warn",
        "require-jsdoc": "off",
        "camelcase": "off",
        "eqeqeq": ["warn", "always"],
        "max-len": [1, {
            "code": 120,
            "tabWidth": 4,
            "ignoreUrls": true,
            "ignorePattern": "goog\\.(module|require)"
        }],
        "lines-between-class-members": ["error", "always", {
            "exceptAfterSingleLine": false
        }],
        "yoda": "error",
        "comma-dangle": ["error", "never"],
        "block-scoped-var": "error",
        "no-empty-pattern": "error",
        "no-inner-declarations": "error",
        "use-isnan": "error",
        "no-dupe-class-members": "error",
        "no-unused-vars": ["error", { "vars": "local" }],
        "no-magic-numbers": ["warn", {
            "ignoreArrayIndexes": true,
            "ignore": [-1, 0, 1, 2]
        }],
        "no-use-before-define": "error",
        "padded-blocks": "off",
        "arrow-parens": "off",
        "no-trailing-spaces": "off"
    },
    "globals": {
        "BX": true
    }
};

