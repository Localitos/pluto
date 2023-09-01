import React from "react";
import map from "lodash/map";
import iconSizeTokens from "../..//src/tokens/size.tokens.json";
import { HeartSvgIcon } from "./HeartSvgIcon";
import { formatPixels, formatRems, formatTokenName } from "./utils";

export const IconSizeTokensTable = (): JSX.Element => {
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
        {map(Object.entries(iconSizeTokens.size), (token) => {
          return (
            <tr key={token[0]}>
              <td>{formatTokenName(token, "size")}</td>
              <td>{formatPixels(token)}</td>
              <td>{formatRems(token)}</td>
              <td>
                <div style={{ width: token[1].value }}>
                  <HeartSvgIcon />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
