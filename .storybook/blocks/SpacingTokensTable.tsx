import React from "react";
import spaceTokens from "../../packages/design-tokens/src/tokens/space.tokens.json";

type SpaceToken = [
  string,
  {
    value: string;
    comment: string;
  }
];

const SpacingTokensTable = () => {
  // this function helps replicate how to use the token in component props. e.g. <Button paddingBottom="space30" />
  const formatTokenName = (token: SpaceToken) =>
    `space${
      token[0].charAt(0).toUpperCase() + token[0].slice(1).replace("-", "")
    }`;
  const formatPixels = (token: SpaceToken) => token[1].comment;
  const formatRems = (token: SpaceToken) => token[1].value;

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
            <h3>Visual</h3>
          </td>
        </tr>
      </thead>
      <tbody>
        {Object.entries(spaceTokens.space).map((token) => {
          return (
            <tr key={token[0]}>
              <td>{formatTokenName(token)}</td>
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
