import { createCss, system, compose } from "@xstyled/styled-components";
import type {
  SystemProp,
  SystemProps,
  Theme,
} from "@xstyled/styled-components";

export interface BoxProps extends SystemProps {
  backgroundColor?: SystemProp<keyof Theme["colors"], Theme>;
  borderColor?: SystemProp<keyof Theme["colors"], Theme>;
  borderTopColor?: SystemProp<keyof Theme["colors"], Theme>;
  borderRightColor?: SystemProp<keyof Theme["colors"], Theme>;
  borderBottomColor?: SystemProp<keyof Theme["colors"], Theme>;
  borderLeftColor?: SystemProp<keyof Theme["colors"], Theme>;
  borderStyle?: SystemProp<keyof Theme["borderStyles"], Theme>;
  borderTopStyle?: SystemProp<keyof Theme["borderStyles"], Theme>;
  borderRightStyle?: SystemProp<keyof Theme["borderStyles"], Theme>;
  borderBottomStyle?: SystemProp<keyof Theme["borderStyles"], Theme>;
  borderLeftStyle?: SystemProp<keyof Theme["borderStyles"], Theme>;
  borderWidth?: SystemProp<keyof Theme["borderWidths"], Theme>;
  borderTopWidth?: SystemProp<keyof Theme["borderWidths"], Theme>;
  borderRightWidth?: SystemProp<keyof Theme["borderWidths"], Theme>;
  borderBottonWidth?: SystemProp<keyof Theme["borderWidths"], Theme>;
  borderLeftWidth?: SystemProp<keyof Theme["borderWidths"], Theme>;
  borderRadius?:
    | SystemProp<
        `${keyof Theme["radii"]} ${keyof Theme["radii"]} ${keyof Theme["radii"]} ${keyof Theme["radii"]}`,
        Theme
      >
    | SystemProp<keyof Theme["radii"], Theme>;
  boxShadow?: SystemProp<keyof Theme["shadows"], Theme> | "none";
  color?: SystemProp<keyof Theme["colors"], Theme> | "currentcolor" | "inherit";
  fontFamily?: SystemProp<keyof Theme["fonts"], Theme> | "inherit";
  fontSize?: SystemProp<keyof Theme["fontSizes"], Theme> | "inherit";
  fontWeight?: SystemProp<keyof Theme["fontWeights"], Theme> | "inherit";
  gap?: SystemProp<keyof Theme["space"], Theme>;
  gridGap?: SystemProp<keyof Theme["space"], Theme>;
  gridRowGap?: SystemProp<keyof Theme["space"], Theme>;
  gridColumnGap?: SystemProp<keyof Theme["space"], Theme>;
  lineHeight?: SystemProp<keyof Theme["lineHeights"], Theme> | "inherit";
  margin?: SystemProp<keyof Theme["space"], Theme>;
  marginTop?: SystemProp<keyof Theme["space"], Theme>;
  marginRight?: SystemProp<keyof Theme["space"], Theme> | "auto";
  marginBottom?: SystemProp<keyof Theme["space"], Theme>;
  marginLeft?: SystemProp<keyof Theme["space"], Theme> | "auto";
  padding?: SystemProp<keyof Theme["space"], Theme>;
  paddingTop?: SystemProp<keyof Theme["space"], Theme>;
  paddingRight?: SystemProp<keyof Theme["space"], Theme>;
  paddingBottom?: SystemProp<keyof Theme["space"], Theme>;
  paddingLeft?: SystemProp<keyof Theme["space"], Theme>;
  zIndex?: SystemProp<keyof Theme["zIndices"], Theme>;
}

const { x } = createCss(compose<BoxProps>(system));

export { x as Box };
