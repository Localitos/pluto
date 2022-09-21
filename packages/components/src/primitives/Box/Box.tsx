import { styled } from "@pluto/theme";
import { getVariants } from "../../utils/get-variants";
import { BaseBox } from "./BaseBox";
import type { BaseBoxProps } from "./BaseBox";

export type BoxProps = BaseBoxProps;

/** A primitive component that can be used to create all block level styles in Pluto */
const Box = styled(BaseBox, {
  boxSizing: "border-box",
  variants: {
    background: getVariants("colors", (tokenValue) => ({
      background: tokenValue,
    })),
    backgroundColor: getVariants("colors", (tokenValue) => ({
      backgroundColor: tokenValue,
    })),
    borderWidth: getVariants("borderWidths", (tokenValue) => ({
      borderWidth: tokenValue,
    })),
    borderTopWidth: getVariants("borderWidths", (tokenValue) => ({
      borderTopWidth: tokenValue,
    })),
    borderRightWidth: getVariants("borderWidths", (tokenValue) => ({
      borderRightWidth: tokenValue,
    })),
    borderBottomWidth: getVariants("borderWidths", (tokenValue) => ({
      borderBottomWidth: tokenValue,
    })),
    borderLeftWidth: getVariants("borderWidths", (tokenValue) => ({
      borderLeftWidth: tokenValue,
    })),
    borderColor: getVariants("colors", (tokenValue) => ({
      borderColor: tokenValue,
    })),
    borderTopColor: getVariants("colors", (tokenValue) => ({
      borderTopColor: tokenValue,
    })),
    borderRightColor: getVariants("colors", (tokenValue) => ({
      borderRightColor: tokenValue,
    })),
    borderBottomColor: getVariants("colors", (tokenValue) => ({
      borderBottomColor: tokenValue,
    })),
    borderLeftColor: getVariants("colors", (tokenValue) => ({
      borderLeftColor: tokenValue,
    })),
    borderRadius: getVariants("radii", (tokenValue) => ({
      borderRadius: tokenValue,
    })),
    borderTopRightRadius: getVariants("radii", (tokenValue) => ({
      borderTopRightRadius: tokenValue,
    })),
    borderTopLeftRadius: getVariants("radii", (tokenValue) => ({
      borderTopLeftRadius: tokenValue,
    })),
    borderBottomRightRadius: getVariants("radii", (tokenValue) => ({
      borderBottomRightRadius: tokenValue,
    })),
    borderBottomLeftRadius: getVariants("radii", (tokenValue) => ({
      borderBottomLeftRadius: tokenValue,
    })),
    borderStyle: getVariants("borderStyles", (tokenValue) => ({
      borderStyle: tokenValue,
    })),
    borderTopStyle: getVariants("borderStyles", (tokenValue) => ({
      borderTopStyle: tokenValue,
    })),
    borderRightStyle: getVariants("borderStyles", (tokenValue) => ({
      borderRightStyle: tokenValue,
    })),
    borderBottomStyle: getVariants("borderStyles", (tokenValue) => ({
      borderBottomStyle: tokenValue,
    })),
    borderLeftStyle: getVariants("borderStyles", (tokenValue) => ({
      borderLeftStyle: tokenValue,
    })),
    boxShadow: getVariants("shadows", (tokenValue) => ({
      boxShadow: tokenValue,
    })),
    color: getVariants("colors", (tokenValue) => ({
      color: tokenValue,
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
    lineHeight: getVariants("lineHeights", (tokenValue) => ({
      lineHeight: tokenValue,
    })),
    margin: getVariants("space", (tokenValue) => ({
      margin: tokenValue,
    })),
    marginTop: getVariants("space", (tokenValue) => ({
      marginTop: tokenValue,
    })),
    marginRight: getVariants("space", (tokenValue) => ({
      marginRight: tokenValue,
    })),
    marginBottom: getVariants("space", (tokenValue) => ({
      marginBottom: tokenValue,
    })),
    marginLeft: getVariants("space", (tokenValue) => ({
      marginLeft: tokenValue,
    })),
    padding: getVariants("space", (tokenValue) => ({
      padding: tokenValue,
    })),
    paddingTop: getVariants("space", (tokenValue) => ({
      paddingTop: tokenValue,
    })),
    paddingRight: getVariants("space", (tokenValue) => ({
      paddingRight: tokenValue,
    })),
    paddingBottom: getVariants("space", (tokenValue) => ({
      paddingBottom: tokenValue,
    })),
    paddingLeft: getVariants("space", (tokenValue) => ({
      paddingLeft: tokenValue,
    })),
  },
});

Box.displayName = "Box";

export { Box };
