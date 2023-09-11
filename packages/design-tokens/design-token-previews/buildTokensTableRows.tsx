import map from "lodash/map";
import invokeMap from "lodash/invokeMap";

import { Token } from "./types/Token";
import { Column, Row } from "./types/TokenTable";
import { formatTokenName } from "./utils/utils";

export const buildTokensTableRows = (
  columns: Column[],
  tokens: Record<string, Record<string, Token>>
): Array<Row> => {
  const [tokenName, tokenEntries] = Object.entries(tokens)[0];

  return map(Object.entries(tokenEntries), (token) => {
    const [key] = token;

    const tokenRows: Row[] = invokeMap(columns, "transform", token) as Row[];

    return [formatTokenName(tokenName, key), ...tokenRows];
  }) as Row[];
};
