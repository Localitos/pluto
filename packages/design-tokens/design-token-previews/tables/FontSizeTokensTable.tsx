import React from "react";
import map from "lodash/map";
import fontSizeTokens from "../../src/tokens/font-size.tokens.json";
import { formatTokenName, formatRems, formatPixels } from "./utils";

export const FontSizeTokensTable = (): JSX.Element => {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <td>
            <h3>Name</h3>
          </td>
          <td>
            <h3>Pixels</h3>
          </td>
          <td>
            <h3>Rems</h3>
          </td>
          <td>
            <h3>Visualization</h3>
          </td>
        </tr>
      </thead>
      <tbody>
        {map(Object.entries(fontSizeTokens["font-size"]), (token) => {
          return (
            <tr key={token[0]}>
              <td>{formatTokenName(token, "fontWeight")}</td>
              <td>{formatPixels(token)}</td>
              <td>{formatRems(token)}</td>
              <td>
                <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
                  <text style={{ fontSize: token[1].value }}>
                    The quick brown fox jumped over the lazy dog.
                  </text>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
