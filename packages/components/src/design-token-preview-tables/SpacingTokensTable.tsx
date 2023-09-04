import React from "react";
import map from "lodash/map";
import includes from "lodash/includes";
import spaceTokens from "../../../design-tokens/src/tokens/space.tokens.json";
import {
  Table,
  THead,
  TBody,
  Tr,
  Th,
  Td,
} from "../../../components/src/components/Table/";
import { formatTokenName, formatRems, formatPixels } from "./utils";
import { CopyToClipboardButton } from "./CopyToClipboardButton";

export const SpacingTokensTable = (): JSX.Element => {
  return (
    <Table style={{ width: "100%" }}>
      <THead>
        <Tr>
          <Th>
            <h3>Name</h3>
          </Th>
          <Th>
            <h3>Pixels</h3>
          </Th>
          <Th>
            <h3>Rems</h3>
          </Th>
          <Th>
            <h3>Visualization</h3>
          </Th>
        </Tr>
      </THead>
      <TBody>
        {map(Object.entries(spaceTokens.space), (token) => {
          return (
            <Tr key={token[0]}>
              <Td>
                <div style={{ display: "flex" }}>
                  <div>{formatTokenName(token, "space")}</div>
                  <CopyToClipboardButton
                    textToCopy={formatTokenName(token, "space")}
                  />
                </div>
              </Td>
              <Td>{formatPixels(token)}</Td>
              <Td>{formatRems(token)}</Td>
              <Td>
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
              </Td>
            </Tr>
          );
        })}
      </TBody>
    </Table>
  );
};
