import type { ValueOf } from "./types/value-of";

export const ThemeVariants = {
  DEFAULT: "default",
};

export type ThemeVariants = ValueOf<typeof ThemeVariants>;
