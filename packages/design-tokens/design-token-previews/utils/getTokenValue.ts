import { TokenEntry } from "../types/TokenEntry";

export const getTokenValue = ([, token]: TokenEntry): string => {
  return token.value;
};
