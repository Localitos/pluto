import React from "react";
import colorTokens from "../../packages/design-tokens/src/tokens/color.tokens.json";
import { formatColorTokenName, hexToRgb, hexToHsla, formatHex } from "./utils";

const ColorTokensTable = () => {
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
                <td>{formatColorTokenName(token)}</td>
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
