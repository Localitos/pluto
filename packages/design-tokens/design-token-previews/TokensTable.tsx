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

export const TokensTable = ({
  header,
  data,
}: {
  header: Array<string>;
  data: Array<Array<Record<string, unknown>>>;
}): JSX.Element => {
  return (
    <Table style={{ width: "100%" }}>
      <THead>
        <Tr>
          {map(header, (column) => {
            return (
              <Th key={column}>
                <h3>{column}</h3>
              </Th>
            );
          })}
        </Tr>
      </THead>
      <TBody>
        {map(data, (row) => {
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
