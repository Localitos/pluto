import React from "react";
import type { SystemProp, Theme } from "@xstyled/styled-components";
import toPairs from "lodash/toPairs";
import isObject from "lodash/isObject";
import forEach from "lodash/forEach";
import { Box, BoxProps } from "../../primitives/Box";

type HeadingLevelOptions = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingSizeOptions =
  | "heading10"
  | "heading20"
  | "heading30"
  | "heading40"
  | "heading50"
  | "heading60"
  | "title-body"
  | "title-display"
  | "title-group"
  | "title-screen"
  | "title-section"
  | "title-subsection";

type ScreenSizes = keyof Theme["screens"];

type HeadingSizeBreakpoints = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [key in ScreenSizes]?: HeadingSizeOptions;
};

type HeadingSizeOptionsProp = HeadingSizeBreakpoints | HeadingSizeOptions;

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">,
    BoxProps {
  /** Sets the HTML element on render. */
  as?: HeadingLevelOptions;
  /** The contents of the heading. Can be text or valid text related HTML, i.e. anchor and strong elements. */
  children: NonNullable<React.ReactNode>;
  /** Changes the size of the heading. */
  size?: HeadingSizeOptionsProp;
}

const isBreakpointObject = (
  size: HeadingSizeOptionsProp,
): size is HeadingSizeBreakpoints => {
  return isObject(size);
};

const getHeadingStyles = (
  size: HeadingSizeOptionsProp,
): {
  fontSize: SystemProp<keyof Theme["fontSizes"], Theme>;
  lineHeight: SystemProp<keyof Theme["lineHeights"], Theme>;
} => {
  switch (size) {
    case "heading10": {
      return {
        fontSize: "fontSize90",
        lineHeight: "lineHeight100",
      };
    }
    case "title-display":
    case "heading30": {
      return {
        fontSize: "titleDisplay",
        lineHeight: "lh12",
      };
    }
    case "title-screen":
    case "heading40": {
      return {
        fontSize: "titleScreen",
        lineHeight: "lh10",
      };
    }
    case "title-section":
    case "heading50": {
      return {
        fontSize: "titleSection",
        lineHeight: "lh8",
      };
    }
    case "title-subsection":
    case "heading60": {
      return {
        fontSize: "titleSubsection",
        lineHeight: "lh7",
      };
    }
    case "title-body": {
      return {
        fontSize: "titleBody",
        lineHeight: "lh6",
      };
    }
    case "title-group": {
      return {
        fontSize: "titleGroup",
        lineHeight: "lh6",
      };
    }
    default: {
      return {
        fontSize: "fontSize80",
        lineHeight: "lineHeight90",
      };
    }
  }
};

const getHeadingSizes = (size: HeadingSizeOptionsProp) => {
  if (isBreakpointObject(size)) {
    let headingSizes = { fontSize: {}, lineHeight: {} };
    forEach(toPairs(size), ([key, value]) => {
      const { fontSize, lineHeight } = getHeadingStyles(value);
      headingSizes = {
        ...headingSizes,
        fontSize: {
          ...headingSizes.fontSize,
          [key]: fontSize,
        },
        lineHeight: {
          ...headingSizes.lineHeight,
          [key]: lineHeight,
        },
      };
    });
    return headingSizes;
  }

  return getHeadingStyles(size);
};

/** A heading is text that gives hierarchical structure to a page */
const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      as,
      children,
      marginBottom = "space70",
      size = "heading20",
      color = "contentPrimary",
      ...props
    },
    ref,
  ) => {
    return (
      <Box.h2
        as={as}
        color={color as BoxProps["color"] as string}
        fontFamily="fontFamilyNotoSans"
        fontWeight="fontWeightBold"
        letterSpacing="normal"
        marginBottom={marginBottom}
        marginTop="m0"
        ref={ref}
        textTransform="initial"
        {...getHeadingSizes(size)}
        {...props}
      >
        {children}
      </Box.h2>
    );
  },
);

Heading.displayName = "Heading";

export { Heading };
