import React from "react";
import camelCase from "lodash/camelCase";
import capitalize from "lodash/capitalize";
import { TokenEntry } from "../types/TokenEntry";
import { TokenName } from "../components/TokenName";

export const getTokenName =
  (prefix: string) =>
  // eslint-disable-next-line react/display-name
  ([suffix]: TokenEntry): JSX.Element => {
    const tokenName = camelCase(`${prefix}${capitalize(suffix)}`);
    return <TokenName tokenName={tokenName} />;
  };
