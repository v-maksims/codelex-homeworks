/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'vue/require-v-for-key': 'off',
        'indent': [
            'error',
            4
        ],
        'space-before-function-paren': [
            'error',
            'always'
        ],
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
