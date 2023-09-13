import { TokenEntry } from "./TokenEntry";

export type Column = {
  name: string;
  transform: (entry: TokenEntry) => JSX.Element | string;
};
