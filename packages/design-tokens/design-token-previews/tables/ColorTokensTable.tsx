import React from "react";
import map from "lodash/map";
import colorTokens from "../../src/tokens/color.tokens.json";
import { formatColorTokenName, hexToRgb, hexToHsla, formatHex } from "./utils";

export const ColorTokensTable = (): JSX.Element => {
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
        {map(Object.entries(colorTokens.color).sort(), (token) => {
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
