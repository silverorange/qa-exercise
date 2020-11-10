const config = require('eslint-config-react-app');

function updateWarnRulesToErrorRules(rules) {
  const newRules = {};

  Object.keys(rules).forEach((key) => {
    const value = rules[key];
    if (Array.isArray(value)) {
      newRules[key] = value.map((part) => (part === 'warn' ? 'error' : part));
    } else if (value === 'warn') {
      newRules[key] = 'error';
    } else {
      newRules[key] = value;
    }
  });

  return newRules;
}

function convertOverridesToArray(overrides) {
  if (!Array.isArray(overrides)) {
    return [overrides];
  }
  return overrides;
}

// Extend the create-react-app config and set all warnings to errors. Also add
// config extensions for Prettier integration, and our own rules (based on
// tslint-react).
const newConfig = Object.assign({}, config, {
  extends: [...config.extends, 'react-app/jest', 'plugin:prettier/recommended'],
  rules: Object.assign(updateWarnRulesToErrorRules(config.rules), {
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-key': 'error',
    'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
    'react/self-closing-comp': 'error',
    'react/no-string-refs': 'error',
    'constructor-super': 'error',
    curly: 'error',
    'dot-notation': 'error',
    'guard-for-in': 'error',
    'new-parens': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-empty': 'error',
    'no-empty-function': 'error',
    'no-new-wrappers': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-const': 'error',
    radix: 'error',
    'use-isnan': 'error',
    'no-shadow': 'error',
    'no-unused-expressions': 'error',
  }),
  overrides: convertOverridesToArray(config.overrides).map((override) => {
    return Object.assign({}, override, {
      rules: updateWarnRulesToErrorRules(override.rules),
    });
  }),
});

module.exports = newConfig;
