module.exports = {
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  printWidth: 100,
  // import order https://github.com/trivago/prettier-plugin-sort-imports
  // third party modules are automatically moved to the top
  importOrder: [
    '^pages/(.*)$',
    '^partials/(.*)$',
    '^common/(.*)$',
    '^constants/(.*)$',
    '^navigation/(.*)$',
    '^hooks/(.*)$',
    '^utils/(.*)$',
    '^assets/(.*)$',
    '^types/(.*)$',
    '^(./)',
    '^(../)',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    // Overrides for local json
    {
      files: ['**/package.json', '**/locales/**/*.json', '.github/**/*.yml'],
      options: {
        useTabs: false,
        tabWidth: 2,
      },
    },
  ],
}
