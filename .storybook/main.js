module.exports = {
  stories: ["../src/**/*.stories.{tsx,mdx}"],
  addons: [
    "@storybook/preset-typescript",
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-a11y/register",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-viewport",
    {
      name: "@storybook/addon-storysource",
      options: {
        parser: "typescript",
      },
    },
  ],
};
