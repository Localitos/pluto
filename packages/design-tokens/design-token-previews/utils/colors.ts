import replace from "lodash/replace";

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
