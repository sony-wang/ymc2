module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      parser: 'babel-eslint'
    },
    extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'plugin:vue/recommended'],
    plugins: ['prettier'],
    ignorePatterns: ['assets/**'], // 子專案不套用規則
    // add your custom rules here
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error', 'debug', 'dir', 'groupEnd', 'info'] }],
      'vue/no-v-html': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'vue/multi-word-component-names': 'off',
      'no-control-regex': 'off',
      'vue/require-name-property': 2,
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'import', next: 'export' }
      ],
      'vue/padding-line-between-blocks': 2,
      'vue/no-empty-component-block': 2,
      'vue/no-unused-properties': [
        'error',
        {
          groups: ['props', 'data', 'methods', 'computed']
        }
      ],
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 2
        },
        multiline: {
          max: 1
        }
      }],
      'vue/singleline-html-element-content-newline': ['error', {
        ignoreWhenNoAttributes: false
      }]
    }
  }
  