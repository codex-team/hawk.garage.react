import type { StorybookViteConfig } from '@storybook/builder-vite';
import { mergeConfig } from 'vite'
import postcssNested from "postcss-nested";

const config: StorybookViteConfig = {
  stories: [
    "../src/commons/**/*.stories.mdx",
    "../src/commons/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    {
      name: '@storybook/addon-essentials',
      options: {
        'backgrounds': false,
      }
    },
    "@storybook/addon-interactions",
    "storybook-design-token",
    "storybook-addon-themes",
  ],
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-vite"
  },
  features: {
    "storyStoreV7": true
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
          css: {
          modules: {
            scopeBehaviour: 'local',
            localsConvention: 'camelCaseOnly',
          },
          postcss: {
            plugins: [
              postcssNested
            ]
          }
        }
    });
  },
}

export default config;
