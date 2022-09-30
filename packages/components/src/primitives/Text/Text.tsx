import React from "react";
import styled from "@emotion/styled";
import {
  boxShadow,
  compose,
  display,
  overflow,
  position,
  space,
  typography,
  verticalAlign,
} from "styled-system";
import {
  createShouldForwardProp,
  props as stylingProps,
} from "@styled-system/should-forward-prop";
import type { StyledComponent } from "@emotion/styled";
import keys from "lodash/keys";
import type { TextProps, StyledTextProps } from "./types";
import { getPseudoStyles, PlutoStyleProps } from "./utils/style-functions";
import { customStyleProps } from "./utils/custom-style-props";
import { PseudoPropStyles } from "./utils/pseudo-prop-styles";

const shouldForwardProp = createShouldForwardProp([
  ...stylingProps,
  ...keys({ ...customStyleProps, ...PseudoPropStyles }),
]);

// @ts-expect-error can't work out how to stop the styled div color prop from emotion clashing with our color style prop in TextProps
export const StyledText = styled<StyledTextProps>("div", { shouldForwardProp })(
  {
    margin: 0,
    padding: 0,
  },
  compose(
    boxShadow,
    display,
    overflow,
    position,
    space,
    typography,
    verticalAlign,
    PlutoStyleProps
  ),
  getPseudoStyles
) as StyledComponent<
  Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    "color"
  >,
  TextProps,
  Record<string, unknown>
>;

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      children,
      color = "colorText",
      fontSize = "fontSize30",
      lineHeight = "lineHeight30",
      ...props
    },
    ref
  ) => {
    return (
      <StyledText
        color={color}
        fontSize={fontSize}
        lineHeight={lineHeight}
        ref={ref}
        {...props}
      >
        {children}
      </StyledText>
    );
  }
);

Text.displayName = "Text";

export { Text };
