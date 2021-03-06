const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/preset-create-react-app",
      options: {
        craOverrides: {
          fileLoaderExcludes: ["less"],
        },
      },
    },
  ],
  presets: [
    {
      name: "@storybook/preset-ant-design",
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            hack: `true; @import "${path.resolve(
              __dirname,
              "../",
              "theme.less"
            )}";`,
            // "primary-color": "#1DA57A",
            // "border-radius-base": "5px",
          },
        },
      },
    },
  ],
};
