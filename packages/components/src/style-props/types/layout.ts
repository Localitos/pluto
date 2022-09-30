// https://styled-system.com/api/#layout
import type { Properties } from "csstype";
import type { ResponsiveValue, TLengthStyledSystem } from "styled-system";

// Tokens
export type WidthOptions =
  | Properties<TLengthStyledSystem>["width"]
  | "100%"
  | "100vw"
  | "auto";
export type MinWidthOptions =
  | Properties<TLengthStyledSystem>["minWidth"]
  | "100%"
  | "100vw"
  | "auto";
export type MaxWidthOptions =
  | Properties<TLengthStyledSystem>["maxWidth"]
  | "100%"
  | "100vw"
  | "auto";
export type HeightOptions =
  | Properties<TLengthStyledSystem>["height"]
  | "100%"
  | "100vh"
  | "auto";
export type MinHeightOptions =
  | Properties<TLengthStyledSystem>["minHeight"]
  | "100%"
  | "100vh"
  | "auto";
export type MaxHeightOptions =
  | Properties<TLengthStyledSystem>["maxHeight"]
  | "100%"
  | "100vh"
  | "auto";

export type Width = ResponsiveValue<WidthOptions>;
export type MinWidth = ResponsiveValue<MinWidthOptions>;
export type MaxWidth = ResponsiveValue<MaxWidthOptions>;
export type Height = ResponsiveValue<HeightOptions>;
export type MinHeight = ResponsiveValue<MinHeightOptions>;
export type MaxHeight = ResponsiveValue<MaxHeightOptions>;
export type Size = Height | Width;

// CSS native
export type DisplayOptions = Properties["display"];
export type VerticalAlignOptions = Properties["verticalAlign"];
export type OverflowOptions = Properties["overflow"];
export type OverflowXOptions = Properties["overflowX"];
export type OverflowYOptions = Properties["overflowY"];

export type Display = ResponsiveValue<DisplayOptions>;
export type VerticalAlign = ResponsiveValue<VerticalAlignOptions>;
export type Overflow = ResponsiveValue<OverflowOptions>;
export type OverflowX = ResponsiveValue<OverflowXOptions>;
export type OverflowY = ResponsiveValue<OverflowYOptions>;

export interface OverflowProps {
  overflow?: Overflow;
  overflowX?: OverflowX;
  overflowY?: OverflowY;
}

// Styled-system grouping
export interface LayoutProps extends OverflowProps {
  width?: Width;
  minWidth?: MinWidth;
  maxWidth?: MaxWidth;
  height?: Height;
  minHeight?: MinHeight;
  maxHeight?: MaxHeight;
  size?: Size;
  display?: Display;
  verticalAlign?: VerticalAlign;
}
