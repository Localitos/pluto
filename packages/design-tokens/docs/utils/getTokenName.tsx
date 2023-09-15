import React from "react";
import camelCase from "lodash/camelCase";
import capitalize from "lodash/capitalize";
import { TokenEntry } from "../types/TokenEntry";
import { getTokenKey } from "./getTokenKey";
import { Token } from "../types/Token";

export const getTokenName = (
  tokens: Record<string, Record<string, Token>>
): (([suffix]: TokenEntry) => string) => {
  const prefix = getTokenKey(tokens);
  return ([suffix]: TokenEntry): string => {
    return camelCase(`${prefix}${capitalize(suffix)}`);
  };
};
