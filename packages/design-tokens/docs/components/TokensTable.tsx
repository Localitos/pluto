import React from "react";
import map from "lodash/map";
import isString from "lodash/isString";
import {
  Table,
  THead,
  TBody,
  Tr,
  Th,
  Td,
} from "../../../components/src/components/Table/";
import { Token } from "../types/Token";
import { buildTokensTableRows } from "../utils";
import { TOKEN_COLUMNS } from "./constants";

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
            <Tr key={`${isString(row[0]) ? row[0] : row[0].props.tokenName}`}>
              {map(row, (cell) => {
                return (
                  <Td key={isString(cell) ? cell : `${cell.props.tokenName}`}>
                    {cell}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </TBody>
    </Table>
  );
};
