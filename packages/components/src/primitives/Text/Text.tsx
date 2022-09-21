import { styled } from "@localyze-pluto/theme";
import { getVariants } from "../../utils/get-variants";
import { BaseText } from "./BaseText";
import type { BaseTextProps } from "./BaseText";

export type TextProps = BaseTextProps;

/** A primitive component that can be used to create all text styles in Pluto. */
const Text = styled(BaseText, {
  color: "$colorText",
  fontFamily: "$moderat",
  fontWeight: "$fontWeightRegular",
  fontSize: "$fontSize10",
  lineHeight: "$lineHeight10",
  margin: "$space0",
  padding: "$space0",
  variants: {
    color: {
      colorTextStrongest: {
        color: "$colorTextStrongest",
      },
      colorTextStronger: {
        colorTextStronger: "$colorTextStronger",
      },
      colorText: {
        color: "$colorText",
      },
      colorTextError: {
        color: "$colorTextError",
      },
      colorTextWarning: {
        color: "$colorTextWarning",
      },
      colorTextSuccess: {
        color: "$colorTextSuccess",
      },
      colorTextInverse: {
        color: "$colorTextInverse",
      },
      colorTextLink: {
        color: "$colorTextLink",
      },
      colorTextLinkStrong: {
        color: "$colorTextLinkStrong",
      },
      colorTextHeading: {
        color: "$colorTextHeading",
      },
    },
    cursor: {
      notAllowed: {
        cursor: "not-allowed",
      },
      pointer: {
        cursor: "pointer",
      },
      wait: {
        cursor: "wait",
      },
    },
    display: {
      block: {
        display: "block",
      },
      inline: {
        display: "inline",
      },
      inlineBlock: {
        display: "inline-block",
      },
    },
    lineHeight: getVariants("lineHeights", (tokenValue) => ({
      lineHeight: tokenValue,
    })),
    fontFamily: getVariants("fonts", (tokenValue) => ({
      fontFamily: tokenValue,
    })),
    fontSize: getVariants("fontSizes", (tokenValue) => ({
      fontSize: tokenValue,
    })),
    fontWeight: getVariants("fontWeights", (tokenValue) => ({
      fontWeight: tokenValue,
    })),
    textDecoration: {
      none: {
        textDecoration: "none",
      },
      underline: {
        textDecoration: "underline",
      },
    },
    textTransform: {
      none: {
        textTransform: "none",
      },
      uppercase: {
        textTransform: "uppercase",
      },
      lowercase: {
        textTransform: "lowercase",
      },
      capitalize: {
        textTransform: "capitalize",
      },
    },
  },
});

Text.displayName = "Text";

export { Text };
