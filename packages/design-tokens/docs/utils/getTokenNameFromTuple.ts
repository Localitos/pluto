import camelCase from "lodash/camelCase";
import capitalize from "lodash/capitalize";
import { TokenTuple } from "../types/TokenTuple";

type TransformFn = (tuple: TokenTuple) => string;

export const getTokenNameFromTuple =
  (prefix: string): TransformFn =>
  ([tokenName]: TokenTuple) => {
    return camelCase(`${prefix}${capitalize(tokenName)}`);
  };
