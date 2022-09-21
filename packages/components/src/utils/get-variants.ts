import { config } from "@pluto/theme";
import keys from "lodash/keys";
import reduce from "lodash/reduce";
import type { CSS } from "../types";

export const getVariants = <
  ThemeKey extends keyof typeof config.theme,
  Tokens extends keyof typeof config.theme[ThemeKey],
  ThemeOptions extends Record<Tokens, CSS>
>(
  prop: ThemeKey,
  map: (tokenValue: string) => CSS
): ThemeOptions => {
  const values = keys(config.theme[prop]) as Tokens[];
  return reduce(
    values,
    (acc, tokenValue) => ({
      ...acc,
      [tokenValue]: map(`$${String(tokenValue)}`),
    }),
    {} as ThemeOptions
  );
};
