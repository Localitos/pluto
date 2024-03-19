import { TokenTuple } from "../types/TokenTuple";

export const getTokenValue = ([, token]: TokenTuple): string => {
  return token.value;
};
