import keys from "lodash/keys";

export const getTokenKey = (object: Record<string, unknown>): string => {
  return keys(object)[0];
};
