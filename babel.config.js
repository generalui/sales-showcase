module.exports = (api) => {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          // Ensure each alias is defined in the tsconfig.json for typescript
          alias: {
            assets: './assets',
            common: './src/components/common',
            constants: './src/utils/constants',
            contexts: './src/contexts',
            hooks: './src/hooks',
            navigation: './src/navigation',
            pages: './src/components/pages',
            partials: './src/components/partials',
            types: './src/types',
            utils: './src/utils',
          },
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        },
      ],
      [
        'babel-plugin-styled-components',
        {
          meaninglessFileNames: ['index', 'styles'],
        },
      ],
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
    ],
  }
}
