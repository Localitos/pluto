export type ColorToken = [
  string,
  {
    type?: string;
    value: string;
  }
];

export type GeneralToken = [
  string,
  {
    value: string;
    comment?: string;
  }
];

export type IconSizeToken = [
  string,
  {
    value: string;
    comment: string;
  }
];
