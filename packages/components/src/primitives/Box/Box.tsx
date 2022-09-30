import React from "react";
import styled from "@emotion/styled";
import {
  compose,
  layout,
  space,
  background,
  typography,
  border,
  boxShadow,
  position,
  flexbox,
  grid,
} from "styled-system";
import {
  createShouldForwardProp,
  props as defaultStylingProps,
} from "@styled-system/should-forward-prop";
import type { StyledComponent } from "@emotion/styled";
import filter from "lodash/filter";
import keys from "lodash/keys";
import type { BoxProps, StyledBoxProps } from "./types";
import { getPseudoStyles, PlutoStyleProps } from "./utils/style-functions";
import { PseudoPropStyles } from "./utils/pseudo-prop-styles";
import { customStyleProps } from "./utils/custom-style-props";

// We need size to hit the DOM for <select /> elements
const stylingPropsWithoutSize = filter(
  defaultStylingProps,
  (item: string) => item !== "size"
);

const shouldForwardProp = createShouldForwardProp([
  ...stylingPropsWithoutSize,
  ...keys({ ...customStyleProps, ...PseudoPropStyles }),
]);

// @ts-expect-error can't work out how to stop the styled div color prop from emotion clashing with our color style prop in BoxProps
export const StyledBox = styled("div", { shouldForwardProp })<StyledBoxProps>(
  {
    boxSizing: "border-box",
  },
  compose(
    space,
    layout,
    flexbox,
    grid,
    background,
    border,
    boxShadow,
    position,
    typography,
    PlutoStyleProps
  ),
  getPseudoStyles
) as unknown as StyledComponent<
  Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    "color"
  >,
  BoxProps,
  Record<string, unknown>
>;

const Box = React.forwardRef<HTMLElement, BoxProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledBox ref={ref} {...props}>
        {children}
      </StyledBox>
    );
  }
);

Box.displayName = "Box";

export { Box };
