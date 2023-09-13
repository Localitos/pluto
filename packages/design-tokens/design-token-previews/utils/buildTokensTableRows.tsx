import map from "lodash/map";
import invokeMap from "lodash/invokeMap";

import { Token } from "../types/Token";
import { Column } from "../types/TokenColumn";
import { Row } from "../types/TokenRow";

export const buildTokensTableRows = (
  columns: Column[],
  tokens: Record<string, Record<string, Token>>
): Array<Row> => {
  const [, tokenEntries] = Object.entries(tokens)[0];

  return map(Object.entries(tokenEntries), (token) => {
    return invokeMap(columns, "transform", token) as Row;
  });
};
