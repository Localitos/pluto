import camelCase from "lodash/camelCase";
import capitalize from "lodash/capitalize";
import { Token } from "../types/Token";
import { TokenTuple } from "../types/TokenTuple";
import { getTokenKey } from "./getTokenKey";

export const getTokenName = (
  tokens: Record<string, Record<string, Token>>,
): (([, suffix]: TokenTuple) => string) => {
  const prefix = getTokenKey(tokens);
  return ([, suffix]: TokenTuple): string => {
    return camelCase(`${prefix}${capitalize(suffix[0])}`);
  };
};
