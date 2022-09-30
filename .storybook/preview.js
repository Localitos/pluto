import React from "react";
import { Title, Description, ArgsTable, Stories } from "@storybook/addon-docs";
import { Theme } from "../packages/theme";

export const decorators = [
  (Story) => {
    return (
      <Theme.Provider>
        <Story />
      </Theme.Provider>
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
    page: () => (
      <>
        <Title />
        <Description />
        <Stories includePrimary />
        <ArgsTable />
      </>
    ),
    source: {
      state: "open",
    },
  },
};
