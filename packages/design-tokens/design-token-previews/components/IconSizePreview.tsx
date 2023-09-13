import React from "react";
import { SystemProp, Theme } from "@xstyled/styled-components";
import { Icon } from "../../../components/src/components/Icon/Icon";
import { ThemeProvider, theme } from "../../../theme";

const IconSizePreview = ({ pixels }: { pixels: string }): JSX.Element => {
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

export { IconSizePreview };
