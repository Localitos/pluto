import "styled-components";
import "@xstyled/system";
import { theme } from "./theme/default";

type AppTheme = typeof theme;

declare module "@xstyled/system" {
  // XStyled wants an interace here.
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends AppTheme {}
}

declare module "styled-components" {
  // XStyled wants an interace here.
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppTheme {}
}

export * from "@xstyled/styled-components";
export * from "./theme/default";
export * from "./styles/base";
export * from "./styles/global";
