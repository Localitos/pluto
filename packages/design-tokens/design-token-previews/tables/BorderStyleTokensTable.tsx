import React from "react";
import map from "lodash/map";
import borderStyleTokens from "../../src/tokens/border-style.tokens.json";
import { formatTokenName } from "./utils";

export const BorderStyleTokensTable = (): JSX.Element => {
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
        {map(Object.entries(borderStyleTokens["border-style"]), (token) => {
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
