import React from "react";
import spaceTokens from "../../packages/design-tokens/src/tokens/space.tokens.json";
import { formatTokenName, formatRems, formatPixels } from "./utils";

const SpacingTokensTable = () => {
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
        {Object.entries(spaceTokens.space).map((token) => {
          return (
            <tr key={token[0]}>
              <td>{formatTokenName(token, "space")}</td>
              <td>{formatPixels(token)}</td>
              <td>{formatRems(token)}</td>
              <td>
                {!token[1].value.includes("-") && (
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

export default SpacingTokensTable;
