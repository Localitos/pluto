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
import fontSizeTokens from "../../../design-tokens/src/tokens/font-size.tokens.json";
import { formatTokenName, formatRems, formatPixels } from "./utils";
import { CopyToClipboardButton } from "./CopyToClipboardButton";

export const FontSizeTokensTable = (): JSX.Element => {
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
        {map(Object.entries(fontSizeTokens["font-size"]), (token) => {
          return (
            <Tr key={token[0]}>
              <Td>
                <div style={{ display: "flex" }}>
                  <div>{formatTokenName(token, "fontSize")}</div>
                  <CopyToClipboardButton
                    textToCopy={formatTokenName(token, "fontSize")}
                  />
                </div>
              </Td>
              <Td>{formatPixels(token)}</Td>
              <Td>{formatRems(token)}</Td>
              <Td>
                <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
                  <div style={{ fontSize: token[1].value }}>
                    The quick brown fox jumped over the lazy dog.
                  </div>
                </div>
              </Td>
            </Tr>
          );
        })}
      </TBody>
    </Table>
  );
};
