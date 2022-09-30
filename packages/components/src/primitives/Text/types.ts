import type {
  Display,
  OverflowProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  VerticalAlign,
  CursorProperty,
  OutlineProperty,
  TransitionProperty,
} from "../../style-props";
import type { PseudoPropStyles } from "./utils/pseudo-prop-styles";

export interface TextBaseStyleProps
  extends OverflowProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {
  content?: string;
  cursor?: CursorProperty;
  display?: Display;
  outline?: OutlineProperty;
  transition?: TransitionProperty;
  verticalAlign?: VerticalAlign;
}

export type TextPseudoStyleProps = {
  [key in keyof typeof PseudoPropStyles]?: TextBaseStyleProps;
};

export interface TextStyleProps
  extends TextBaseStyleProps,
    TextPseudoStyleProps {}

export interface TextElementProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color"> {
  as: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  href?: string;
  /** Typed as any because Text can literally be any HTML element */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: any | null;
  rel?: string;
  target?: string;
  dateTime?: string;
}

export interface TextProps extends TextElementProps, TextStyleProps {}

export type StyledTextProps = TextProps;
