import React from "react";
import camelCase from "lodash/camelCase";
import capitalize from "lodash/capitalize";
import { TokenEntry } from "../types/TokenEntry";
import { TokenName } from "../components/TokenName";
import { getTokenKey } from "./getTokenKey";

type Tokens = Record<string, unknown>;

export const getTokenName = (
  tokens: Tokens
): (([suffix]: TokenEntry) => JSX.Element) => {
  const prefix = getTokenKey(tokens);
  // eslint-disable-next-line react/display-name
  return ([suffix]: TokenEntry): JSX.Element => {
    const tokenName = camelCase(`${prefix}${capitalize(suffix)}`);
    return <TokenName tokenName={tokenName} />;
  };
};
