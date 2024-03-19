import React from "react";
import replace from "lodash/replace";
import camelCase from "lodash/camelCase";
import upperFirst from "lodash/upperFirst";
import { ThemeProvider, theme } from "@localyze-pluto/theme";
import { TokenTuple } from "../types/TokenTuple";
import { Box, BoxProps } from "../../../components/src/primitives/Box";
import { IconProps } from "../../../components/src/components/Icon/Icon";

type PreviewProps = {
  prefix: string;
  attribute: string;
  children?: JSX.Element;
  componentProps?: BoxProps | IconProps;
  overrideProps?: Record<string, BoxProps | IconProps>;
  component?: unknown;
};

export const createPreview =
  ({
    attribute,
    children,
    prefix,
    overrideProps = {},
    componentProps,
    component: Component = Box.div,
  }: PreviewProps) =>
  // eslint-disable-next-line react/display-name
  ([tokenName, token]: TokenTuple): JSX.Element => {
    const tokenProps = overrideProps[token.value];
    const normalizedSuffix = replace(
      upperFirst(camelCase(tokenName)),
      "Negative",
      "",
    );

    const props = {
      ...componentProps,
      ...tokenProps,
      children,
      [attribute]: `${camelCase(prefix)}${normalizedSuffix}`,
    };

    return (
      <ThemeProvider theme={theme}>
        <Box.div className="sb-unstyled">
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore-next-line */}
          <Component {...props}>{children}</Component>
        </Box.div>
      </ThemeProvider>
    );
  };
