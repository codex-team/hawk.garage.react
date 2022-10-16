import type { StorybookViteConfig } from '@storybook/builder-vite';
import { mergeConfig } from 'vite'
import svgr from "@honkhonk/vite-plugin-svgr";
import rootViteConfig from '../vite.config';
import { viteStorybookDesignTokenPlugin } from 'storybook-design-token/dist/plugin';

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
  async viteFinal(config) {
    return mergeConfig(config, {
      ...rootViteConfig,
      plugins: [
        svgr(),
        viteStorybookDesignTokenPlugin({}),
      ],
    });
  },
}

export default config;
