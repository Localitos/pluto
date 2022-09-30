import type { GenericThemeShape } from "../../packages/theme/src/types/generic-theme-shape";
import type { EmotionMatchers } from "@emotion/jest";

declare global {
  const TestTheme: GenericThemeShape;
}

declare module "@emotion/jest" {
  interface Jest {
    JestMatchers: EmotionMatchers;
  }
}
