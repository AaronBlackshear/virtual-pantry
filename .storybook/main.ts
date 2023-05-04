import type { StorybookConfig } from "@storybook/nextjs";
const path = require('path');
const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    // @ts-ignore
    config.resolve.alias = {
      // @ts-ignore
      ...config.resolve.alias,
      "@/styles": path.resolve(__dirname, "../styles"),
      "@/components": path.resolve(__dirname, "../components"),
      "@/lib": path.resolve(__dirname, "../lib"),
    };

    // @ts-ignore
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
    });

    return config;
  }
};
export default config;
