import { TokenTuple } from "../types/TokenTuple";

export const getTokenComment = ([, token]: TokenTuple): string => {
  return token.comment || "";
};
