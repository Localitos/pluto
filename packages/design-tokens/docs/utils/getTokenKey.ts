import keys from "lodash/keys";
import { Token } from "../types/Token";

export const getTokenKey = (
  object: Record<string, Record<string, Token>>,
): string => {
  return keys(object)[0];
};
