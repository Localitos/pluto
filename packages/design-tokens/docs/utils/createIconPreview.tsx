import React from "react";

import { SystemProp, Theme } from "@xstyled/styled-components";
import { Icon } from "../../../components/src/components/Icon/Icon";
import { ThemeProvider, theme } from "../../../theme";
import { TokenEntry } from "../types/TokenEntry";

import { getTokenValue } from "./getTokenValue";

export const createIconPreview = (tokenEntry: TokenEntry): JSX.Element => {
  const pixels = getTokenValue(tokenEntry);
  return (
    <ThemeProvider theme={theme}>
      <Icon
        decorative
        display="flex"
        icon="HeartIcon"
        size={pixels as SystemProp<keyof Theme["sizes"], Theme>}
      />
    </ThemeProvider>
  );
};
