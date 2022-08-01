import fs from 'fs';
import { parseCssFiles } from 'storybook-design-token/dist/parsers/postcss.parser';
import type { StorybookViteConfig } from "@storybook/builder-vite";
import type { Category } from "storybook-design-token/dist/types/category.types";
import { TokenSourceType } from "storybook-design-token/dist/types/token.types";

const config: StorybookViteConfig = {
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
    const designTokenPaths: string[] = fs
      .readdirSync('./src/commons/themes')
      .filter((fn: string) => fn.endsWith('.css'));

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

    parserOutput.then((tokensGroupByCategory: {
      categories: Category[];
      injectionStyles: string;
    }) => {
      fs.writeFileSync(
        './design-tokens.source.json',
        JSON.stringify({
          cssTokens: tokensGroupByCategory,
        }),
      );
    });

    return config;
  }
}

export default config;
