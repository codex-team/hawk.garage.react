import type { StorybookConfig } from "@storybook/core-common";

const config: StorybookConfig = {
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
  }
}

export default config;
