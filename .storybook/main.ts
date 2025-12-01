import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/components/**/*.stories.@(tsx|jsx|ts|js)"],
};

export default config;
