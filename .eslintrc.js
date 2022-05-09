module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'react-hooks', 'prefer-arrow-functions'],
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'arrow-body-style': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/namespace': 'off',
    'import/no-relative-parent-imports': 'error',
    'import/no-unresolved': 'off',
    'prefer-arrow-functions/prefer-arrow-functions': 'error',
    'react/prop-types': 'off',
  },
}
