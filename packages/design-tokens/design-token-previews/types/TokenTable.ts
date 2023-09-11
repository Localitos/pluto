import { TokenEntry } from "./TokenEntry";

export type Row = Array<JSX.Element | string>;

export type Column = {
  name: string;
  transform: (entry: TokenEntry) => JSX.Element | string;
};
