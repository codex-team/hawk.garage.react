const fs = require('fs');
const parser = require('storybook-design-token/dist/parsers/postcss.parser.js');

module.exports = {
  stories: [
    "../src/commons/**/*.stories.mdx",
    "../src/commons/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-design-token"
  ],
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-vite"
  },
  features: {
    "storyStoreV7": true
  },
  viteFinal: (config) => {
    let designTokenPaths = fs.readdirSync('./src/commons/themes').filter(fn => fn.endsWith('.css'));
    console.log('DesignTokenFile', designTokenPaths);

    const readedCssFiles = designTokenPaths.map(filename => ({
      filename: `./src/commons/themes/${filename}`,
      content: fs.readFileSync(`./src/commons/themes/${filename}`),
    }))

    const parserOutput = parser.parseCssFiles(
      readedCssFiles,
      'CSS',
      false,
      true
    );
    parserOutput.then((tokensGroupByCategory) => {
      fs.writeFileSync(
        './design-tokens.source.json',
        JSON.stringify({
          cssTokens: tokensGroupByCategory,
        })
      );
    });

    return config;
  }
}