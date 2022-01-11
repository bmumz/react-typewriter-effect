// const path = require("path");

module.exports = {
  stories: ["../src/stories/components/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
};
