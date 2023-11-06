import React from "react";
import type { SystemProp, Theme } from "@xstyled/styled-components";
import toPairs from "lodash/toPairs";
import isObject from "lodash/isObject";
import forEach from "lodash/forEach";
import { Text } from "../../primitives/Text";

type HeadingLevelOptions = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingMarginOptions = keyof Theme["space"];
type HeadingSizeOptions =
  | "heading10"
  | "heading20"
  | "heading30"
  | "heading40"
  | "heading50"
  | "heading60";

type ScreenSizes = keyof Theme["screens"];

type HeadingSizeBreakpoints = {
  [key in ScreenSizes]?: HeadingSizeOptions;
};

type HeadingSizeOptionsProp = HeadingSizeBreakpoints | HeadingSizeOptions;

type HeadingFontColors =
  | "colorTextHeading"
  | "colorTextHeadingStrong"
  | "colorTextHeadingStronger"
  | "colorTextInverse";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Sets the HTML element on render. */
  as?: HeadingLevelOptions;
  /** The contents of the heading. Can be text or valid text related HTML, i.e. anchor and strong elements. */
  children: NonNullable<React.ReactNode>;
  /** Changes the bottom margin of the heading.  */
  marginBottom?: HeadingMarginOptions;
  /** Changes the size of the heading. */
  size?: HeadingSizeOptionsProp;

  /** Changes the font color of the heading */
  color?: HeadingFontColors;
}

const isBreakpointObject = (
  size: HeadingSizeOptionsProp
): size is HeadingSizeBreakpoints => {
  return isObject(size);
};

const getHeadingStyles = (
  size: HeadingSizeOptionsProp
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
    case "heading30": {
      return {
        fontSize: "fontSize70",
        lineHeight: "lineHeight80",
      };
    }
    case "heading40": {
      return {
        fontSize: "fontSize60",
        lineHeight: "lineHeight70",
      };
    }
    case "heading50": {
      return {
        fontSize: "fontSize50",
        lineHeight: "lineHeight60",
      };
    }
    case "heading60": {
      return {
        fontSize: "fontSize40",
        lineHeight: "lineHeight50",
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
      color = "colorTextHeadingStronger",
      ...props
    },
    ref
  ) => {
    return (
      <Text.h2
        as={as}
        color={color}
        fontFamily="fontFamilyModerat"
        fontWeight="fontWeightBold"
        letterSpacing="normal"
        marginBottom={marginBottom}
        marginTop="space0"
        ref={ref}
        textTransform="initial"
        {...getHeadingSizes(size)}
        {...props}
      >
        {children}
      </Text.h2>
    );
  }
);

Heading.displayName = "Heading";

export { Heading };
