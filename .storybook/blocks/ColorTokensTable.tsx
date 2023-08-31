import React from "react";
import colorTokens from "../../packages/design-tokens/src/tokens/color.tokens.json";

type ColorToken = [
  string,
  {
    type?: string;
    value: string;
  }
];

const ColorTokensTable = () => {
  // this function helps replicate how to use the token in component props. e.g. <Button color="colorTextError" />
  const formatTokenName = (token: ColorToken) => {
    const prefix = "color";
    const words = token[0].split("-");

    // Capitalize the first letter of each word and join them
    const formattedWords = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");

    return prefix + formattedWords;
  };

  const hexToRgb = (hex: string) => {
    // Remove '#' if it's present
    hex = hex.replace("#", "");

    // Parse the hex value into RGB components
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const hexToHsla = (hex: string, alpha = 1) => {
    hex = hex.replace("#", "");

    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const lightness = (max + min) / 2;

    let hue: number = 0,
      saturation: number;

    if (max === min) {
      hue = 0; // achromatic
      saturation = 0;
    } else {
      const delta = max - min;
      saturation =
        lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
      switch (max) {
        case r:
          hue = (g - b) / delta + (g < b ? 6 : 0);
          break;
        case g:
          hue = (b - r) / delta + 2;
          break;
        case b:
          hue = (r - g) / delta + 4;
          break;
      }
      hue /= 6;
    }

    const h = Math.round(hue * 360);
    const s = Math.round(saturation * 100);
    const l = Math.round(lightness * 100);

    return `hsla(${h}, ${s}%, ${l}%, ${alpha})`;
  };
  const formatHex = (token: ColorToken) => token[1].value;

  return (
    <table>
      <thead>
        <tr>
          <td>
            <h3>Name</h3>
          </td>
          <td>
            <h3>Color</h3>
          </td>
          <td>
            <h3>Hex</h3>
          </td>
          <td>
            <h3>RGB</h3>
          </td>
          <td>
            <h3>hsla</h3>
          </td>
        </tr>
      </thead>
      <tbody>
        {Object.entries(colorTokens.color)
          .sort()
          .map((token) => {
            return (
              <tr key={token[0]}>
                <td>{formatTokenName(token)}</td>
                <td>
                  <div
                    style={{
                      width: "100%",
                      backgroundColor: token[1].value,
                    }}
                  >
                    &nbsp;
                  </div>
                </td>
                <td>{formatHex(token)}</td>
                <td>{hexToRgb(token[1].value)}</td>
                <td>{hexToHsla(token[1].value)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default ColorTokensTable;
