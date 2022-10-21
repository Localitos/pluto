import toUpper from "lodash/toUpper";

const getInitials = (name: string): string => {
  const regex = new RegExp(/\b(\w)/, "g");
  const initials = [...name.matchAll(regex)];
  const firstLetter = initials.shift()?.[1] || "";
  const lastLetter = initials.pop()?.[1] || "";
  return toUpper(`${firstLetter}${lastLetter}`);
};

export { getInitials };
