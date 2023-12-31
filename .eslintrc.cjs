module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "airbnb",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react-in-jsx-scope': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-plusplus': 'off',
    'react/jsx-filename-extension': 'off',
    'max-len': 'off',
  },
}
