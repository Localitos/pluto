import React from "react";
import replace from "lodash/replace";
import { TokenEntry } from "../types/TokenEntry";
import { Box, BoxProps } from "../../../components/src/primitives/Box";
import { ThemeProvider, theme } from "@localyze-pluto/theme";
import { camelCase, upperFirst } from "lodash";
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
  ([suffix]: TokenEntry): JSX.Element => {
    const tokenProps = overrideProps[suffix] || {};
    const normalizedSuffix = replace(
      upperFirst(camelCase(suffix)),
      "Negative",
      ""
    );

    const props = {
      ...(componentProps || {}),
      ...tokenProps,
      children,
      [attribute]: `${camelCase(prefix)}${normalizedSuffix}`,
    };

    return (
      <ThemeProvider theme={theme}>
        <Box.div className="sb-unstyled">
          {/* @ts-ignore-next-line */}
          <Component {...props}>{children}</Component>
        </Box.div>
      </ThemeProvider>
    );
  };
