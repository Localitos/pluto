import { ThemeConsumer } from "./ThemeConsumer";
import { ThemeProvider } from "./ThemeProvider";

const Theme = {
  Provider: ThemeProvider,
  Consumer: ThemeConsumer,
};

export { Theme };

export { plutoBaseStyles } from "./styles/base";
export { plutoGlobalStyles } from "./styles/global";

export type { ThemeProviderProps } from "./ThemeProvider";
export type { ThemeShape } from "./types/generic-theme-shape";
export type { GenericThemeShape } from "./types/generic-theme-shape";
export { DefaultTheme } from "./theme/default";
export { StyledBase } from "./ThemeProvider";
export { ThemeVariants } from "./constants";
export { generateThemeFromTokens } from "./utils/generate-theme-from-tokens";
