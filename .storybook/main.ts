import type { StorybookConfig } from "@storybook/core-common";

const config: StorybookConfig = {
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
    "storybook-addon-themes"
  ],
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-vite"
  },
  features: {
    "storyStoreV7": true
  }
}

export default config;
