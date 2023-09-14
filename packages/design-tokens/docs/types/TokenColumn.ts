import { TokenEntry } from "./TokenEntry";

export type TokenColumn = {
  name: string;
  transform: (entry: TokenEntry) => JSX.Element | string;
};
