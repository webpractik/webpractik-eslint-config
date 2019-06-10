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
        "prefer-spread": "off",
        "require-jsdoc": "off",
        "no-duplicate-imports": "warn",
        "eqeqeq": ["warn", "always"],
        "max-len": [2, {
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
        "no-redeclare": "error",
        "no-self-assign": "error",
        "no-empty-pattern": "error",
        "no-inner-declarations": "error",
        "no-sparse-arrays": "error",
        "use-isnan": "error",
        "no-class-assign": "error",
        "no-dupe-class-members": "error",
        "no-unused-vars": ["error", { "vars": "local" }],
        "no-magic-numbers": ["error", {
            "ignoreArrayIndexes": true,
            "ignore": [0, 1, 2]
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

