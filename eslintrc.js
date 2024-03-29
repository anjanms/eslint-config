'use strict';

/* eslint key-spacing: [2, { "mode": "minimum" }] */

exports.extends = [
    'eslint:recommended',
    'plugin:n/recommended'
];

exports.plugins = [
    'eslint-plugin-n'
];

exports.rules = {
    /*
     * ESLint Core
     */

    // Possible Problems

    'array-callback-return':                        [2],
    'constructor-super':                            [2],
    'for-direction':                                [2],
    'getter-return':                                [2],
    'no-async-promise-executor':                    [2],
    'no-await-in-loop':                             [1],
    'no-class-assign':                              [2],
    'no-compare-neg-zero':                          [2],
    'no-cond-assign':                               [2],
    'no-const-assign':                              [2],
    'no-constant-binary-expression':                [2],
    'no-constant-condition':                        [2],
    'no-constructor-return':                        [2],
    'no-control-regex':                             [2],
    'no-debugger':                                  [2],
    'no-dupe-args':                                 [2],
    'no-dupe-class-members':                        [2],
    'no-dupe-else-if':                              [2],
    'no-dupe-keys':                                 [2],
    'no-duplicate-case':                            [2],
    'no-duplicate-imports':                         [2],
    'no-empty-character-class':                     [2],
    'no-empty-pattern':                             [2],
    'no-ex-assign':                                 [2],
    'no-fallthrough':                               [2],
    'no-func-assign':                               [2],
    'no-import-assign':                             [2],
    'no-inner-declarations':                        [2],
    'no-invalid-regexp':                            [2],
    'no-irregular-whitespace':                      [2],
    'no-loss-of-precision':                         [2],
    'no-misleading-character-class':                [2],
    'no-new-native-nonconstructor':                 [2],
    'no-new-symbol':                                [0], // https://github.com/eslint/eslint/issues/17446
    'no-obj-calls':                                 [2],
    'no-promise-executor-return':                   [2],
    'no-prototype-builtins':                        [2],
    'no-self-assign':                               [2],
    'no-self-compare':                              [2],
    'no-setter-return':                             [2],
    'no-sparse-arrays':                             [2],
    'no-template-curly-in-string':                  [2],
    'no-this-before-super':                         [2],
    'no-undef':                                     [2],
    'no-unexpected-multiline':                      [2],
    'no-unmodified-loop-condition':                 [2],
    'no-unreachable':                               [2],
    'no-unreachable-loop':                          [2],
    'no-unsafe-finally':                            [2],
    'no-unsafe-negation':                           [2],
    'no-unsafe-optional-chaining':                  [2],
    'no-unused-private-class-members':              [2],
    'no-unused-vars':                               [2, {args: 'none'}],
    'no-use-before-define':                         [2, 'nofunc'],
    'no-useless-backreference':                     [2],
    'require-atomic-updates':                       [2, {allowProperties: true}],
    'use-isnan':                                    [2],
    'valid-typeof':                                 [2],

    // Suggestions

    'accessor-pairs':                               [2],
    'arrow-body-style':                             [2],
    'block-scoped-var':                             [2],
    'camelcase':                                    [2],
    'capitalized-comments':                         [0],
    'class-methods-use-this':                       [0],
    'complexity':                                   [0],
    'consistent-return':                            [0],
    'consistent-this':                              [0],
    'curly':                                        [2, 'multi-line'],
    'default-case':                                 [2],
    'default-case-last':                            [2],
    'default-param-last':                           [1],
    'dot-notation':                                 [1],
    'eqeqeq':                                       [2, 'always', {null: 'ignore'}],
    'func-name-matching':                           [0],
    'func-names':                                   [0],
    'func-style':                                   [2, 'declaration', {allowArrowFunctions: true}],
    'grouped-accessor-pairs':                       [1],
    'guard-for-in':                                 [2],
    'id-blacklist':                                 [0],
    'id-length':                                    [0],
    'id-match':                                     [0],
    'init-declarations':                            [0],
    'logical-assignment-operators':                 [0],
    'max-classes-per-file':                         [0],
    'max-depth':                                    [0],
    'max-lines':                                    [0],
    'max-lines-per-function':                       [0],
    'max-nested-callbacks':                         [0],
    'max-params':                                   [0],
    'max-statements':                               [0],
    'multiline-comment-style':                      [0],
    'new-cap':                                      [2, {capIsNew: false}],
    'no-alert':                                     [1],
    'no-array-constructor':                         [2],
    'no-bitwise':                                   [1],
    'no-caller':                                    [2],
    'no-case-declarations':                         [2],
    'no-confusing-arrow':                           [1],
    'no-console':                                   [1],
    'no-continue':                                  [0],
    'no-delete-var':                                [2],
    'no-div-regex':                                 [0],
    'no-else-return':                               [2],
    'no-empty':                                     [2],
    'no-empty-function':                            [2],
    'no-empty-static-block':                        [2],
    'no-eq-null':                                   [0],
    'no-eval':                                      [2],
    'no-extend-native':                             [2],
    'no-extra-bind':                                [2],
    'no-extra-boolean-cast':                        [2],
    'no-extra-label':                               [2],
    'no-extra-semi':                                [2],
    'no-floating-decimal':                          [2],
    'no-global-assign':                             [2],
    'no-implicit-coercion':                         [2],
    'no-implicit-globals':                          [2],
    'no-implied-eval':                              [2],
    'no-inline-comments':                           [0],
    'no-invalid-this':                              [0],
    'no-iterator':                                  [2],
    'no-label-var':                                 [2],
    'no-labels':                                    [2],
    'no-lone-blocks':                               [2],
    'no-lonely-if':                                 [2],
    'no-loop-func':                                 [2],
    'no-magic-numbers':                             [0],
    'no-mixed-operators':                           [2],
    'no-multi-assign':                              [0],
    'no-multi-str':                                 [2],
    'no-negated-condition':                         [2],
    'no-nested-ternary':                            [2],
    'no-new':                                       [2],
    'no-new-func':                                  [2],
    'no-new-object':                                [2],
    'no-new-wrappers':                              [2],
    'no-nonoctal-decimal-escape':                   [2],
    'no-octal':                                     [2],
    'no-octal-escape':                              [2],
    'no-param-reassign':                            [0],
    'no-plusplus':                                  [1, {allowForLoopAfterthoughts: true}],
    'no-proto':                                     [2],
    'no-redeclare':                                 [2],
    'no-regex-spaces':                              [2],
    'no-restricted-exports':                        [0],
    'no-restricted-globals':                        [0],
    'no-restricted-imports':                        [0],
    'no-restricted-properties':                     [0],
    'no-restricted-syntax':                         [0],
    'no-return-assign':                             [2, 'always'],
    'no-script-url':                                [2],
    'no-sequences':                                 [2],
    'no-shadow':                                    [2, {allow: ['resolve', 'reject', 'done', 'next', 'err', 'cb']}],
    'no-shadow-restricted-names':                   [2],
    'no-ternary':                                   [0],
    'no-throw-literal':                             [2],
    'no-undef-init':                                [2],
    'no-undefined':                                 [0],
    'no-underscore-dangle':                         [0],
    'no-unneeded-ternary':                          [2],
    'no-unused-expressions':                        [2],
    'no-unused-labels':                             [2],
    'no-useless-call':                              [2],
    'no-useless-catch':                             [2],
    'no-useless-computed-key':                      [2],
    'no-useless-concat':                            [2],
    'no-useless-constructor':                       [2],
    'no-useless-escape':                            [2],
    'no-useless-rename':                            [2],
    'no-useless-return':                            [2],
    'no-var':                                       [0],
    'no-void':                                      [2],
    'no-warning-comments':                          [1],
    'no-with':                                      [2],
    'object-shorthand':                             [2, 'consistent'],
    'one-var':                                      [2, {initialized: 'never'}],
    'one-var-declaration-per-line':                 [2],
    'operator-assignment':                          [0],
    'prefer-arrow-callback':                        [0],
    'prefer-const':                                 [0],
    'prefer-destructuring':                         [0],
    'prefer-exponentiation-operator':               [0],
    'prefer-named-capture-group':                   [0],
    'prefer-numeric-literals':                      [0],
    'prefer-object-has-own':                        [0],
    'prefer-object-spread':                         [0],
    'prefer-promise-reject-errors':                 [0],
    'prefer-regex-literals':                        [0],
    'prefer-rest-params':                           [0],
    'prefer-spread':                                [0],
    'prefer-template':                              [0],
    'quote-props':                                  [2, 'consistent-as-needed'],
    'radix':                                        [2],
    'require-await':                                [0],
    'require-unicode-regexp':                       [0],
    'require-yield':                                [2],
    'sort-imports':                                 [0],
    'sort-keys':                                    [0],
    'sort-vars':                                    [0],
    'spaced-comment':                               [2, 'always', {block: {balanced: true}}],
    'strict':                                       [2],
    'symbol-description':                           [1],
    'vars-on-top':                                  [0],
    'yoda':                                         [2],

    // Layout & Formatting

    'array-bracket-newline':                        [2, 'consistent'],
    'array-bracket-spacing':                        [2],
    'array-element-newline':                        [0],
    'arrow-parens':                                 [2],
    'arrow-spacing':                                [2],
    'block-spacing':                                [2],
    'brace-style':                                  [2, '1tbs', {allowSingleLine: true}],
    'comma-dangle':                                 [2],
    'comma-spacing':                                [2],
    'comma-style':                                  [2],
    'computed-property-spacing':                    [2],
    'dot-location':                                 [2, 'property'],
    'eol-last':                                     [2],
    'func-call-spacing':                            [2],
    'function-call-argument-newline':               [2, 'consistent'],
    'function-paren-newline':                       [0],
    'generator-star-spacing':                       [2, {before: false, after: true}],
    'implicit-arrow-linebreak':                     [0],
    'indent':                                       [2],
    'jsx-quotes':                                   [0],
    'key-spacing':                                  [2],
    'keyword-spacing':                              [2],
    'line-comment-position':                        [0],
    'linebreak-style':                              [0],
    'lines-around-comment':                         [0],
    'lines-between-class-members':                  [2],
    'max-len':                                      [2, 120],
    'max-statements-per-line':                      [0],
    'multiline-ternary':                            [0],
    'new-parens':                                   [2],
    'newline-per-chained-call':                     [0],
    'no-extra-parens':                              [0],
    'no-mixed-spaces-and-tabs':                     [2],
    'no-multi-spaces':                              [2, {ignoreEOLComments: true}],
    'no-multiple-empty-lines':                      [2, {max: 1}],
    'no-tabs':                                      [2],
    'no-trailing-spaces':                           [2],
    'no-whitespace-before-property':                [2],
    'nonblock-statement-body-position':             [2],
    'object-curly-newline':                         [2],
    'object-curly-spacing':                         [2, 'always'],
    'object-property-newline':                      [2, {allowAllPropertiesOnSameLine: true}],
    'operator-linebreak':                           [0],
    'padded-blocks':                                [2, 'never'],
    'padding-line-between-statements':              [0],
    'quotes':                                       [2, 'single', {avoidEscape: true}],
    'rest-spread-spacing':                          [2],
    'semi':                                         [2],
    'semi-spacing':                                 [2],
    'semi-style':                                   [2],
    'space-before-blocks':                          [2],
    'space-before-function-paren':                  [2, {named: 'never'}],
    'space-in-parens':                              [2],
    'space-infix-ops':                              [2],
    'space-unary-ops':                              [2],
    'switch-colon-spacing':                         [2],
    'template-curly-spacing':                       [2],
    'template-tag-spacing':                         [2],
    'unicode-bom':                                  [0],
    'wrap-iife':                                    [2, 'inside', {functionPrototypeMethods: true}],
    'wrap-regex':                                   [0],
    'yield-star-spacing':                           [2, {before: false, after: true}],

    /*
     * ESLint Node Plugin
     */

    'n/callback-return':                            [0],
    'n/exports-style':                              [0],
    'n/file-extension-in-import':                   [0],
    'n/global-require':                             [0],
    'n/handle-callback-err':                        [1],
    'n/no-callback-literal':                        [0],
    'n/no-deprecated-api':                          [1],
    'n/no-exports-assign':                          [2],
    'n/no-extraneous-import':                       [2],
    'n/no-extraneous-require':                      [2],
    'n/no-missing-import':                          [2],
    'n/no-missing-require':                         [2],
    'n/no-mixed-requires':                          [0],
    'n/no-new-require':                             [2],
    'n/no-path-concat':                             [2],
    'n/no-process-env':                             [0],
    'n/no-process-exit':                            [2],
    'n/no-restricted-import':                       [0],
    'n/no-restricted-require':                      [0],
    'n/no-sync':                                    [0],
    'n/no-unpublished-bin':                         [1],
    'n/no-unpublished-import':                      [1],
    'n/no-unpublished-require':                     [1],
    'n/no-unsupported-features/es-builtins':        [2],
    'n/no-unsupported-features/es-syntax':          [2],
    'n/no-unsupported-features/node-builtins':      [2],
    'n/prefer-global/buffer':                       [0],
    'n/prefer-global/console':                      [0],
    'n/prefer-global/process':                      [0],
    'n/prefer-global/text-decoder':                 [0],
    'n/prefer-global/text-encoder':                 [0],
    'n/prefer-global/url':                          [0],
    'n/prefer-global/url-search-params':            [0],
    'n/prefer-promises/dns':                        [0],
    'n/prefer-promises/fs':                         [0],
    'n/process-exit-as-throw':                      [2],
    'n/shebang':                                    [2]
};
