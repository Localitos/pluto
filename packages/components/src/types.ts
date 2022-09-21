import type Stitches from "@stitches/react";
import { config } from "@pluto/theme";

export type CSS = Stitches.CSS<typeof config>;

export interface CSSProp {
  css?: CSS;
}
