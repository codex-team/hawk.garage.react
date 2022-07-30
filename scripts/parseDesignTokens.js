const fs = require('fs');
const parser = require('storybook-design-token/dist/parsers/postcss.parser.js');

let DesignTokenFile = fs.readFileSync('./src/commons/themes/root-colors-dark.css', 'utf8');

const parserOutput = parser.parseCssFiles(
  [{ filename: './src/commons/themes/root-colors-dark.css', content: DesignTokenFile }],
  'CSS',
  false,
  true
);
parserOutput.then((tokensGroupByCategory) => {
  fs.writeFileSync(
    '.storybook/public/design-tokens.source.json',
    JSON.stringify({
      cssTokens: tokensGroupByCategory,
    })
  );
});