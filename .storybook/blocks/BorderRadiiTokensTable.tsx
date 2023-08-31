import React from "react";
import borderRadiiTokens from "../../packages/design-tokens/src/tokens/border-radius.tokens.json";
import { formatTokenName } from "./utils";

const BorderRadiiTokensTable = () => {
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
        {Object.entries(borderRadiiTokens["border-radius"]).map((token) => {
          return (
            <tr key={token[0]}>
              <td>{formatTokenName(token, "borderRadius")}</td>
              <td>{token[1].value}</td>
              <td>
                <div
                  style={{ borderStyle: "solid", borderRadius: token[1].value }}
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

export default BorderRadiiTokensTable;
