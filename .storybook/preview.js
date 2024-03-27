import React from "react";
import {
  Title,
  Description,
  Stories,
  Controls,
  PureArgsTable,
} from "@storybook/addon-docs";
import { ArgTypes } from "@storybook/blocks";
import customTheme from "./theme";
import {
  ThemeProvider,
  theme,
  GlobalStyles,
  BaseStyles,
} from "../packages/theme";

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BaseStyles />
        <Story />
      </ThemeProvider>
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
  viewMode: "docs",
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
  },
  docs: {
    page: () => {
      return (
        <>
          <Title />
          <Description />
          <Stories includePrimary />
          <Controls />
          <ArgTypes />
          {/* <PureArgsTable /> */}
        </>
      );
    },
    source: {
      state: "open",
    },
    theme: customTheme,
  },
};
