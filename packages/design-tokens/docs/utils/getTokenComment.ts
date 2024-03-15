import { TokenEntry } from "../types/TokenEntry";

export const getTokenComment = ([, token]: TokenEntry): string => {
  return token[1].comment || "";
};
