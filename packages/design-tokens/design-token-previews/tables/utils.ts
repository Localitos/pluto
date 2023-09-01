import replace from "lodash/replace";
import map from "lodash/map";
import toUpper from "lodash/toUpper";
import split from "lodash/split";
import { ColorToken, GeneralToken } from "./types";

// this function helps replicate how to use the space token in component props. e.g. <Button paddingBottom="space30" />
export const formatTokenName = (token: GeneralToken, prefix: string): string =>
  `${prefix}${
    toUpper(token[0].charAt(0)) + replace(token[0].slice(1), "-", "")
  }`;

// this function helps replicate how to use the color token in component props. e.g. <Button color="colorTextError" />
export const formatColorTokenName = (token: ColorToken): string => {
  const prefix = "color";
  const words = split(token[0], "-");

  // Capitalize the first letter of each word and join them
  const formattedWords = map(
    words,
    (word) => toUpper(word.charAt(0)) + word.slice(1)
  ).join("");

  return prefix + formattedWords;
};

export const hexToRgb = (hex: string): string => {
  // Remove '#' if it's present
  hex = replace(hex, "#", "");

  // Parse the hex value into RGB components
  const r = Number.parseInt(hex.slice(0, 2), 16);
  const g = Number.parseInt(hex.slice(2, 4), 16);
  const b = Number.parseInt(hex.slice(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
};

export const hexToHsla = (hex: string, alpha = 1): string => {
  hex = replace(hex, "#", "");

  const r = Number.parseInt(hex.slice(0, 2), 16) / 255;
  const g = Number.parseInt(hex.slice(2, 4), 16) / 255;
  const b = Number.parseInt(hex.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const lightness = (max + min) / 2;

  let hue = 0,
    saturation: number;

  if (max === min) {
    hue = 0; // achromatic
    saturation = 0;
  } else {
    const delta = max - min;
    saturation =
      lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    switch (max) {
      case r: {
        hue = (g - b) / delta + (g < b ? 6 : 0);
        break;
      }
      case g: {
        hue = (b - r) / delta + 2;
        break;
      }
      case b: {
        hue = (r - g) / delta + 4;
        break;
      }
    }
    hue /= 6;
  }

  const h = Math.round(hue * 360);
  const s = Math.round(saturation * 100);
  const l = Math.round(lightness * 100);

  return `hsla(${h}, ${s}%, ${l}%, ${alpha})`;
};

export const formatHex = (token: ColorToken): string => token[1].value;

export const formatPixels = (token: GeneralToken): string | undefined =>
  token[1].comment;
export const formatRems = (token: GeneralToken): string => token[1].value;
