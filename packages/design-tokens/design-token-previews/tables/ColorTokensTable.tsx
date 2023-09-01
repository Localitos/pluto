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
import colorTokens from "../../src/tokens/color.tokens.json";
import { formatColorTokenName, hexToRgb, hexToHsla, formatHex } from "./utils";
import { CopyToClipboardButton } from "./CopyToClipboardButton";

export const ColorTokensTable = (): JSX.Element => {
  return (
    <Table>
      <THead>
        <Tr>
          <Th>
            <h3>Name</h3>
          </Th>
          <Th>
            <h3>Color</h3>
          </Th>
          <Th>
            <h3>Hex</h3>
          </Th>
          <Th>
            <h3>RGB</h3>
          </Th>
          <Th>
            <h3>hsla</h3>
          </Th>
        </Tr>
      </THead>
      <TBody>
        {map(Object.entries(colorTokens.color).sort(), (token) => {
          return (
            <Tr key={token[0]}>
              <Td>
                <div style={{ display: "flex" }}>
                  <div>{formatColorTokenName(token)}</div>
                  <CopyToClipboardButton
                    textToCopy={formatColorTokenName(token)}
                  />
                </div>
              </Td>
              <Td>{formatColorTokenName(token)}</Td>
              <Td>
                <div
                  style={{
                    width: "100%",
                    backgroundColor: token[1].value,
                  }}
                >
                  &nbsp;
                </div>
              </Td>
              <Td>{formatHex(token)}</Td>
              <Td>{hexToRgb(token[1].value)}</Td>
              <Td>{hexToHsla(token[1].value)}</Td>
            </Tr>
          );
        })}
      </TBody>
    </Table>
  );
};
