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
import { Token } from "../types/Token";
import { TOKEN_COLUMNS } from "../utils/constants";
import { buildTokensTableRows } from "../utils";

type TokenTypes = keyof typeof TOKEN_COLUMNS;

export const TokensTable = ({
  type,
  data,
}: {
  type: TokenTypes;
  data: Record<string, Record<string, Token>>;
}): JSX.Element => {
  const columns = TOKEN_COLUMNS[type];
  const rows = buildTokensTableRows(columns, data);

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
