import React from "react";
import fontWeightTokens from "../../packages/design-tokens/src/tokens/font-weight.tokens.json";
import { formatTokenName } from "./utils";

const FontWeightTokensTable = () => {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <td>
            <h3>Name</h3>
          </td>
          <td>
            <h3>Weight</h3>
          </td>
          <td>
            <h3>Visualization</h3>
          </td>
        </tr>
      </thead>
      <tbody>
        {Object.entries(fontWeightTokens["font-weight"]).map((token) => {
          return (
            <tr key={token[0]}>
              <td>{formatTokenName(token, "fontWeight")}</td>
              <td>{token[1].value}</td>
              <td>
                <div style={{ fontWeight: token[1].value }}>
                  The quick brown fox jumped over the lazy dog.
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default FontWeightTokensTable;
