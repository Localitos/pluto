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
import borderStyleTokens from "../../../design-tokens/src/tokens/border-style.tokens.json";
import { formatTokenName } from "./utils";
import { CopyToClipboardButton } from "./CopyToClipboardButton";

export const BorderStyleTokensTable = (): JSX.Element => {
  return (
    <Table style={{ width: "100%" }}>
      <THead>
        <Tr>
          <Th>
            <h3>Name</h3>
          </Th>
          <Th>
            <h3>Style</h3>
          </Th>
          <Th>
            <h3>Visualization</h3>
          </Th>
        </Tr>
      </THead>
      <TBody>
        {map(Object.entries(borderStyleTokens["border-style"]), (token) => {
          return (
            <Tr key={token[0]}>
              <Td>
                <div style={{ display: "flex" }}>
                  <div>{formatTokenName(token, "borderStyle")}</div>
                  <CopyToClipboardButton
                    textToCopy={formatTokenName(token, "borderStyle")}
                  />
                </div>
              </Td>
              <Td>{token[1].value}</Td>
              <Td>
                <div style={{ borderStyle: token[1].value }}>&nbsp;</div>
              </Td>
            </Tr>
          );
        })}
      </TBody>
    </Table>
  );
};
