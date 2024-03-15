import { TokenTuple } from "../types/TokenTuple";

export const getTokenComment = ([, token]: TokenTuple): string => {
  return token[1].comment || "";
};
