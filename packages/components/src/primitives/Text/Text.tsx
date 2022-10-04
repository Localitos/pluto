import {
  createCss,
  display,
  typography,
  compose,
} from "@xstyled/styled-components";
import type {
  DisplayProps,
  TypographyProps,
  SystemProp,
  Theme,
} from "@xstyled/styled-components";

export interface TextProps extends DisplayProps, TypographyProps {
  color?: SystemProp<keyof Theme["colors"], Theme>;
  fontFamily?: SystemProp<keyof Theme["fonts"], Theme>;
  fontSize?: SystemProp<keyof Theme["fontSizes"], Theme>;
  fontWeight?: SystemProp<keyof Theme["fontWeights"], Theme>;
  lineHeight?: SystemProp<keyof Theme["lineHeights"], Theme>;
}

const { x } = createCss(compose<TextProps>(display, typography));

export { x as Text };
