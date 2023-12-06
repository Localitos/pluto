import React from "react";
import type { SystemProp, Theme } from "@xstyled/styled-components";
import { Text } from "../../primitives/Text";

type ParagraphMarginOptions = "space0" | "space70";
type ParagraphSizeOptions = "large" | "medium" | "small";

export interface ParagraphProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, "color"> {
  /** The contents of the paragraph. Can be text or valid text related HTML, i.e. anchor and strong elements. */
  children: NonNullable<React.ReactNode>;
  /** Sets the bottom margin of the Paragraph. */
  marginBottom?: ParagraphMarginOptions;
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
  ({ children, marginBottom = "space70", size = "medium", ...props }, ref) => {
    return (
      <Text.p
        color="colorTextStrongest"
        fontFamily="fontFamilyModerat"
        fontWeight="fontWeightRegular"
        marginBottom={marginBottom}
        marginTop="space0"
        ref={ref}
        {...getParagraphStyles(size)}
        {...props}
      >
        {children}
      </Text.p>
    );
  },
);

Paragraph.displayName = "Paragraph";

export { Paragraph };
