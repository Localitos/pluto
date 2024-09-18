import React from "react";
import map from "lodash/map";
import keys from "lodash/keys";
import filter from "lodash/filter";
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
import { TokenRow } from "../types/TokenRow";
import { Box } from "../../../components/src/primitives/Box";
import { TOKEN_COLUMNS } from "./constants";
import { TokenName } from "./TokenName";

export const TokensTable = ({
  data,
  category,
}: {
  data: Record<string, Record<string, Token>>;
  category: string;
}): JSX.Element => {
  const tokenNames: Array<string> = filter(
    keys(data),
    (item) => item !== "default",
  );
  const columnGroups = map(tokenNames, (token) => {
    return TOKEN_COLUMNS[category][token];
  });
  const rowGroups: TokenRow[][] = map(columnGroups, (columns, index) => {
    const token = tokenNames[index];
    return buildTokensTableRows(columns, data[token]);
  });

  return (
    <Box.div>
      <Table style={{ width: "100%" }}>
        <THead>
          <Tr>
            {map(columnGroups[0], (column) => {
              return (
                <Th key={column.name}>
                  <h3>{column.name}</h3>
                </Th>
              );
            })}
          </Tr>
        </THead>
        <TBody>
          {map(rowGroups, (rows) =>
            map(rows, (row) => {
              const tokenName = row[0] as string;
              return (
                <Tr key={tokenName}>
                  {map(row, (cell, index) => {
                    const column = columnGroups[0][index]?.name;
                    return (
                      <Td key={`${tokenName}${column}`}>
                        {index === 0 ? (
                          <TokenName tokenName={cell as string} />
                        ) : (
                          cell
                        )}
                      </Td>
                    );
                  })}
                </Tr>
              );
            }),
          )}
        </TBody>
      </Table>
    </Box.div>
  );
};
