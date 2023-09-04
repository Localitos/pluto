import React from "react";
import map from "lodash/map";
import {
  Table,
  THead,
  TBody,
  Tr,
  Th,
  Td,
} from "../../../components/src/components/Table/";
import fontWeightTokens from "../../../design-tokens/src/tokens/font-weight.tokens.json";
import { formatTokenName } from "./utils";
import { CopyToClipboardButton } from "./CopyToClipboardButton";

export const FontWeightTokensTable = (): JSX.Element => {
  return (
    <Table style={{ width: "100%" }}>
      <THead>
        <Tr>
          <Th>
            <h3>Name</h3>
          </Th>
          <Th>
            <h3>Weight</h3>
          </Th>
          <Th>
            <h3>Visualization</h3>
          </Th>
        </Tr>
      </THead>
      <TBody>
        {map(Object.entries(fontWeightTokens["font-weight"]), (token) => {
          return (
            <Tr key={token[0]}>
              <Td>
                <div style={{ display: "flex" }}>
                  <div>{formatTokenName(token, "fontWeight")}</div>
                  <CopyToClipboardButton
                    textToCopy={formatTokenName(token, "fontWeight")}
                  />
                </div>
              </Td>
              <Td>{token[1].value}</Td>
              <Td>
                <div style={{ fontWeight: token[1].value }}>
                  The quick brown fox jumped over the lazy dog.
                </div>
              </Td>
            </Tr>
          );
        })}
      </TBody>
    </Table>
  );
};
