import { css } from "@styled-system/css";
import { system } from "styled-system";
import type { Config } from "styled-system";
import type { CSSObject } from "@styled-system/css";
import keys from "lodash/keys";
import filter from "lodash/filter";
import startsWith from "lodash/startsWith";
import type { StyledBoxProps } from "../types";
import { PseudoPropStyles } from "./pseudo-prop-styles";
import { customStyleProps } from "./custom-style-props";

export const PlutoStyleProps = system(customStyleProps as Config);

/**
 * Take _ prefixed style props and convert them to custom style props for CSS pseudo selectors
 *
 * @param {StyledBoxProps} props any prop that Box can take
 * @returns {*}  {(((props?: Record<string, unknown> | undefined) => CSSObject) | Record<string, never>)}
 */
export const getPseudoStyles = (
  props: Partial<StyledBoxProps>
):
  | Record<string, never>
  | ((props?: Record<string, unknown> | undefined) => CSSObject) => {
  const pseudoProps = filter(keys(props), (propName) =>
    startsWith(propName, "_")
  ) as Array<keyof typeof PseudoPropStyles>;

  if (pseudoProps.length === 0) {
    return {};
  }

  const pseudoStyles: { [key: string]: unknown } = {};
  for (const pseudoProp of pseudoProps) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (PseudoPropStyles[pseudoProp] != null) {
      pseudoStyles[PseudoPropStyles[pseudoProp]] = props[pseudoProp];
    }
  }

  return css(pseudoStyles);
};
