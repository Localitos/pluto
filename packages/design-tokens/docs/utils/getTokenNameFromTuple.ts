import camelCase from "lodash/camelCase";
import upperFirst from "lodash/upperFirst";
import replace from "lodash/replace";
import { TokenTuple } from "../types/TokenTuple";

type TransformFn = (tuple: TokenTuple) => string;

export const getTokenNameFromTuple =
  (prefix: string): TransformFn =>
  ([tokenName]: TokenTuple) => {
    return `${camelCase(prefix)}${upperFirst(replace(camelCase(tokenName), "-", ""))}`;
  };
