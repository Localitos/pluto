import map from "lodash/map";
import invokeMap from "lodash/invokeMap";

import { Token } from "../types/Token";
import { TokenColumn } from "../types/TokenColumn";
import { TokenRow } from "../types/TokenRow";

export const buildTokensTableRows = (
  columns: TokenColumn[],
  tokens: Record<string, Record<string, Token>>
): Array<TokenRow> => {
  const [, tokenEntries] = Object.entries(tokens)[0];

  return map(Object.entries(tokenEntries), (token) => {
    return invokeMap(columns, "transform", token) as TokenRow;
  });
};
