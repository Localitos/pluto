import React from "react";
import map from "lodash/map";
import borderRadiiTokens from "../../src/tokens/border-radius.tokens.json";
import {
  Table,
  THead,
  TBody,
  Tr,
  Th,
  Td,
} from "../../../components/src/components/Table/";
import { formatTokenName } from "./utils";
import { CopyToClipboardButton } from "./CopyToClipboardButton";

export const BorderRadiiTokensTable = (): JSX.Element => {
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
            <h3>Visualization</h3>
          </Th>
        </Tr>
      </THead>
      <TBody>
        {map(Object.entries(borderRadiiTokens["border-radius"]), (token) => {
          return (
            <Tr key={token[0]}>
              <Td>
                <div style={{ display: "flex" }}>
                  <div>{formatTokenName(token, "borderRadius")}</div>
                  <CopyToClipboardButton
                    textToCopy={formatTokenName(token, "borderRadius")}
                  />
                </div>
              </Td>
              <Td>{token[1].value}</Td>
              <Td>
                <div
                  style={{ borderStyle: "solid", borderRadius: token[1].value }}
                >
                  &nbsp;
                </div>
              </Td>
            </Tr>
          );
        })}
      </TBody>
    </Table>
  );
};
