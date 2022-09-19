import { globalStyles } from "../packages/theme";

export const decorators = [
  (Story) => {
    globalStyles();
    return (
      <>
        <Story />
      </>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
  },
};
