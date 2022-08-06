const fs = require('fs');
const { parseCssFiles } = require('storybook-design-token/dist/parsers/postcss.parser');
const { TokenSourceType } = require('storybook-design-token/dist/types/token.types');

const designTokenPaths = fs
  .readdirSync('./src/commons/themes')
  .filter((fn) => fn.endsWith('.css'));

const readCssFiles = designTokenPaths.map(filename => ({
  filename: `./src/commons/themes/${filename}`,
  content: fs.readFileSync(`./src/commons/themes/${filename}`),
}))

const parserOutput = parseCssFiles(
  readCssFiles,
  TokenSourceType.CSS,
  false,
  true,
);

parserOutput.then((tokensGroupByCategory) => {
  fs.writeFileSync(
    './design-tokens.source.json',
    JSON.stringify({
      cssTokens: tokensGroupByCategory,
    }),
  );
});
