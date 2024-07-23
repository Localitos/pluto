import React from "react";
import type { SystemProp, Theme } from "@xstyled/styled-components";
import { Box, BoxProps } from "../../primitives/Box";

type ParagraphSizeOptions = "large" | "medium" | "small";

export interface ParagraphProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, "color">,
    BoxProps {
  /** The contents of the paragraph. Can be text or valid text related HTML, i.e. anchor and strong elements. */
  children: NonNullable<React.ReactNode>;
  /** Changes the font-size and line-height of the Paragraph. */
  size?: ParagraphSizeOptions;
}

const getParagraphStyles = (
  size: ParagraphSizeOptions,
): {
  fontSize: SystemProp<keyof Theme["fontSizes"], Theme>;
  lineHeight: SystemProp<keyof Theme["lineHeights"], Theme>;
} => {
  switch (size) {
    case "small": {
      return {
        fontSize: "fontSize10",
        lineHeight: "lineHeight10",
      };
    }
    case "large": {
      return {
        fontSize: "fontSize30",
        lineHeight: "lineHeight40",
      };
    }
    default: {
      return {
        fontSize: "fontSize20",
        lineHeight: "lineHeight30",
      };
    }
  }
};

/** A Paragraph is a block of text. */
const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, size = "medium", ...props }, ref) => {
    return (
      <Box.p
        color="colorTextStrongest"
        fontFamily="fontFamilyNotoSans"
        fontWeight="fontWeightRegular"
        marginBottom="space70"
        marginTop="m0"
        ref={ref}
        {...getParagraphStyles(size)}
        {...props}
      >
        {children}
      </Box.p>
    );
  },
);

Paragraph.displayName = "Paragraph";

export { Paragraph };
