import React from "react";
import type { SystemProp, Theme } from "@xstyled/styled-components";
import { Text } from "../../primitives/Text";

type HeadingLevelOptions = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingMarginOptions = "space0" | "space70";
type HeadingSizeOptions =
  | "heading10"
  | "heading20"
  | "heading30"
  | "heading40"
  | "heading50"
  | "heading60";

type HeadingFontColors =
  | "colorTextHeading"
  | "colorTextHeadingStrong"
  | "colorTextHeadingStronger";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Sets the HTML element on render. */
  as?: HeadingLevelOptions;
  /** The contents of the heading. Can be text or valid text related HTML, i.e. anchor and strong elements. */
  children: NonNullable<React.ReactNode>;
  /** Changes the bottom margin of the heading.  */
  marginBottom?: HeadingMarginOptions;
  /** Changes the size of the heading. */
  size?: HeadingSizeOptions;

  /** Changes the font color of the heading */
  color?: HeadingFontColors;
}

const getHeadingStyles = (
  size: HeadingSizeOptions
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
        marginBottom={marginBottom}
        ref={ref}
        {...getHeadingStyles(size)}
        {...props}
      >
        {children}
      </Text.h2>
    );
  }
);

Heading.displayName = "Heading";

export { Heading };
