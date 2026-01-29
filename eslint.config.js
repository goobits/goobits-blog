import js from '@eslint/js'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'

export default [
  js.configs.recommended,
  ...svelte.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    ignores: ['node_modules/**', 'dist/**', '.svelte-kit/**']
  },
  {
    rules: {
      // ===== STRICT VARIABLE RULES =====
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
      'no-shadow': 'error',
      'no-redeclare': 'error',

      // ===== STRICT CODE QUALITY RULES =====
      'eqeqeq': ['error', 'always'],
      'no-implicit-coercion': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-script-url': 'error',
      'no-void': 'error',
      'no-with': 'error',
      'radix': 'error',
      'no-return-assign': ['error', 'always'],
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'prefer-promise-reject-errors': 'error',

      // ===== STRICT ERROR PREVENTION =====
      'no-constant-condition': 'error',
      'no-dupe-args': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty': ['error', { allowEmptyCatch: false }],
      'no-ex-assign': 'error',
      'no-extra-boolean-cast': 'error',
      'no-func-assign': 'error',
      'no-inner-declarations': 'error',
      'no-irregular-whitespace': 'error',
      'no-obj-calls': 'error',
      'no-sparse-arrays': 'error',
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error',

      // ===== STRICT BEST PRACTICES =====
      'array-callback-return': ['error', { allowImplicit: false }],
      'block-scoped-var': 'error',
      'consistent-return': 'error',
      'curly': ['error', 'all'],
      'default-case': 'error',
      'default-case-last': 'error',
      'dot-notation': 'error',
      'guard-for-in': 'error',
      'no-alert': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-constructor-return': 'error',
      'no-else-return': ['error', { allowElseIf: false }],
      'no-empty-function': ['error', { allow: ['arrowFunctions'] }],
      'no-empty-pattern': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-fallthrough': 'error',
      'no-floating-decimal': 'error',
      'no-global-assign': 'error',
      'no-implicit-globals': 'error',
      'no-invalid-this': 'error',
      'no-iterator': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-multi-str': 'error',
      'no-new': 'error',
      'no-new-wrappers': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': ['error', { props: false }],
      'no-proto': 'error',
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
      'no-unused-labels': 'error',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-escape': 'error',
      'require-await': 'error',
      'yoda': 'error',

      // ===== STRICT ES6+ RULES =====
      'arrow-body-style': ['error', 'as-needed'],
      'no-duplicate-imports': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'no-var': 'error',
      'object-shorthand': ['error', 'always'],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
      'prefer-const': ['error', { destructuring: 'all' }],
      'prefer-destructuring': ['error', { array: false, object: true }],
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'symbol-description': 'error',

      // ===== LOGGING - allowed for library =====
      'no-console': 'off',

      // ===== SVELTE-SPECIFIC STRICT RULES =====
      // Library components don't use SvelteKit's resolve() - consumers handle routing
      'svelte/no-navigation-without-resolve': 'off',
      // Enforce strict Svelte reactivity patterns
      'svelte/prefer-writable-derived': 'error',
      // SvelteURLSearchParams not needed for SSR-safe patterns already in use
      'svelte/prefer-svelte-reactivity': 'error',
      'svelte/no-at-html-tags': 'error',
      'svelte/no-reactive-functions': 'error',
      'svelte/no-reactive-literals': 'error',
      'svelte/no-useless-mustaches': 'error',
      'svelte/require-each-key': 'error',
      'svelte/require-event-dispatcher-types': 'error',
      'svelte/valid-each-key': 'error'
    }
  }
]
