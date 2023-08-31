import React from "react";
import borderWidthTokens from "../../packages/design-tokens/src/tokens/border-width.tokens.json";
import { formatTokenName } from "./utils";

const BorderWidthTokensTable = () => {
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
            <h3>Visualization</h3>
          </td>
        </tr>
      </thead>
      <tbody>
        {Object.entries(borderWidthTokens["border-width"]).map((token) => {
          return (
            <tr key={token[0]}>
              <td>{formatTokenName(token, "borderWidth")}</td>
              <td>{token[1].value}</td>
              <td>
                <div
                  style={{ borderStyle: "solid", borderWidth: token[1].value }}
                >
                  &nbsp;
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BorderWidthTokensTable;
