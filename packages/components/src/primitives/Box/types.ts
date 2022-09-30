import React from "react";
import type {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  AnimationProperty,
  AppearanceProperty,
  BoxSizingProperty,
  ClipProperty,
  CursorProperty,
  FloatProperty,
  ObjectFitProperty,
  ObjectPositionProperty,
  OpacityProperty,
  OutlineProperty,
  PointerEventsProperty,
  ResizeProperty,
  TableLayoutProperty,
  TransformOriginProperty,
  TransformProperty,
  TransitionProperty,
  UserSelectProperty,
  VisibilityProperty,
  WillChangeProperty,
} from "../../style-props";

import type { PseudoPropStyles } from "./utils/pseudo-prop-styles";

export interface BoxBaseStyleProps
  extends LayoutProps,
    SpaceProps,
    BackgroundProps,
    BorderProps,
    ShadowProps,
    PositionProps,
    TypographyProps,
    FlexboxProps,
    GridProps {
  animation?: AnimationProperty;
  appearance?: AppearanceProperty;
  boxSizing?: BoxSizingProperty;
  clip?: ClipProperty;
  content?: string;
  cursor?: CursorProperty;
  float?: FloatProperty;
  objectFit?: ObjectFitProperty;
  objectPosition?: ObjectPositionProperty;
  opacity?: OpacityProperty;
  outline?: OutlineProperty;
  pointerEvents?: PointerEventsProperty;
  resize?: ResizeProperty;
  tableLayout?: TableLayoutProperty;
  transform?: TransformProperty;
  transformOrigin?: TransformOriginProperty;
  transition?: TransitionProperty;
  userSelect?: UserSelectProperty;
  visibility?: VisibilityProperty;
  willChange?: WillChangeProperty;
  "-webkit-text-fill-color"?: string;
  "-webkit-opacity"?: string;
}

export type BoxPseudoStyleProps = Partial<
  Record<keyof typeof PseudoPropStyles, BoxBaseStyleProps>
>;

export interface BoxStyleProps extends BoxBaseStyleProps, BoxPseudoStyleProps {}

// Omits potential clashes from our style props with HTMLAttributes (i.e.: color)
export interface BoxElementProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof BoxBaseStyleProps> {
  accept?: string;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  type?: string;
  /** Typed as any because Box can literally be any HTML element */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: any | null;
  // Image props
  alt?: string;
  src?: string;
  // Link props
  href?: string;
  rel?: string;
  target?: string;
  //  Select props
  multiple?: boolean;
  // Optgroup props
  label?: string;
  datetime?: string;
  disabled?: boolean;
}

export interface BoxProps extends BoxElementProps, BoxStyleProps {}

export type StyledBoxProps = BoxProps;
