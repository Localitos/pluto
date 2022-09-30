import React from "react";
import {
  Global as StylingGlobals,
  ThemeProvider as StyledThemeProvider,
} from "@emotion/react";
import styled from "@emotion/styled";
import { plutoBaseStyles } from "./styles/base";
import { plutoGlobalStyles } from "./styles/global";
import { DefaultTheme } from "./theme/default";
import { ThemeVariants } from "./constants";

export const StyledBase = styled.div(plutoBaseStyles);

const getProviderThemeProps = (
  theme: ThemeVariants,
  customBreakpoints?: string[]
  // eslint-disable-next-line @typescript-eslint/ban-types
): {} => {
  return {
    ...DefaultTheme,
    breakpoints: customBreakpoints || DefaultTheme.breakpoints,
  };
};

export interface ThemeProviderProps {
  customBreakpoints?: string[];
  theme?: ThemeVariants;
  children?: React.ReactNode;
}

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  customBreakpoints,
  theme = ThemeVariants.DEFAULT,
  ...props
}) => {
  const providerThemeProps = getProviderThemeProps(theme, customBreakpoints);

  return (
    <StyledThemeProvider theme={providerThemeProps}>
      <StylingGlobals
        styles={plutoGlobalStyles({ theme: providerThemeProps })}
      />
      <StyledBase className="pluto-theme-provider" {...props} />
    </StyledThemeProvider>
  );
};

export { ThemeProvider };
