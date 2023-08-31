import React from "react";
import borderStyleTokens from "../../packages/design-tokens/src/tokens/border-style.tokens.json";
import { formatTokenName } from "./utils";

const BorderStyleTokensTable = () => {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <td>
            <h3>Name</h3>
          </td>
          <td>
            <h3>Style</h3>
          </td>
          <td>
            <h3>Visualization</h3>
          </td>
        </tr>
      </thead>
      <tbody>
        {Object.entries(borderStyleTokens["border-style"]).map((token) => {
          return (
            <tr key={token[0]}>
              <td>{formatTokenName(token, "borderStyle")}</td>
              <td>{token[1].value}</td>
              <td>
                <div style={{ borderStyle: token[1].value }}>&nbsp;</div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BorderStyleTokensTable;
