import type { StorybookViteConfig } from '@storybook/builder-vite';
import { mergeConfig } from 'vite'
import postcssNested from "postcss-nested";
import svgr from "@honkhonk/vite-plugin-svgr";

const config: StorybookViteConfig = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
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
    "storybook-addon-react-router-v6",
  ],
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-vite"
  },
  features: {
    "storyStoreV7": true
  },
  typescript: {
    reactDocgenTypescriptOptions: {
      check: false,
      checkOptions: {},
      reactDocgen: 'react-docgen-typescript',
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
    }
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [svgr()],
      css: {
        modules: {
          scopeBehaviour: 'local',
          localsConvention: 'camelCase',
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
