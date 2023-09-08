import React from "react";
import map from "lodash/map";
import {
  Table,
  THead,
  TBody,
  Tr,
  Th,
  Td,
} from "../../components/src/components/Table/";
import { TOKENS, renderRows } from "./utils";
import { Token } from "./types/Token";

type TokenTypes = keyof typeof TOKENS;

export const TokensTable = ({
  type,
  data,
}: {
  type: TokenTypes;
  data: Record<string, Record<string, Token>>;
}): JSX.Element => {
  const columns = TOKENS[type];
  const rows = renderRows(columns, data);

  return (
    <Table style={{ width: "100%" }}>
      <THead>
        <Tr>
          {map(columns, (column) => {
            return (
              <Th key={column.name}>
                <h3>{column.name}</h3>
              </Th>
            );
          })}
        </Tr>
      </THead>
      <TBody>
        {map(rows, (row) => {
          return (
            <Tr>
              {map(row, (cell) => {
                return <Td>{cell}</Td>;
              })}
            </Tr>
          );
        })}
      </TBody>
    </Table>
  );
};
