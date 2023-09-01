import React from "react";
import map from "lodash/map";
import borderRadiiTokens from "../../src/tokens/border-radius.tokens.json";
import { formatTokenName } from "./utils";

export const BorderRadiiTokensTable = (): JSX.Element => {
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
        {map(Object.entries(borderRadiiTokens["border-radius"]), (token) => {
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
