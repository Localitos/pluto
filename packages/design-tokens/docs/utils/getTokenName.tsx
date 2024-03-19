import camelCase from "lodash/camelCase";
import capitalize from "lodash/capitalize";
import { Token } from "../types/Token";
import { TokenTuple } from "../types/TokenTuple";
import { getTokenKey } from "./getTokenKey";

export const getTokenName = (
  tokens: Record<string, Record<string, Token>>,
): (([tokenName]: TokenTuple) => string) => {
  const prefix = getTokenKey(tokens);
  return ([tokenName]: TokenTuple): string => {
    return camelCase(`${prefix}${capitalize(tokenName)}`);
  };
};
