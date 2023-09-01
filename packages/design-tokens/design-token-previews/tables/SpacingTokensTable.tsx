import React from "react";
import map from "lodash/map";
import includes from "lodash/includes";
import spaceTokens from "../../src/tokens/space.tokens.json";
import { formatTokenName, formatRems, formatPixels } from "./utils";

export const SpacingTokensTable = (): JSX.Element => {
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
        {map(Object.entries(spaceTokens.space), (token) => {
          return (
            <tr key={token[0]}>
              <td>{formatTokenName(token, "space")}</td>
              <td>{formatPixels(token)}</td>
              <td>{formatRems(token)}</td>
              <td>
                {!includes(token[1].value, "-") && (
                  <div
                    style={{
                      width: `${formatPixels(token)}`,
                      backgroundColor: "#413cff",
                    }}
                  >
                    &nbsp;
                  </div>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
