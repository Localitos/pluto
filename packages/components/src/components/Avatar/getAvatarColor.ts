import type { AvatarColorOptions } from "./Avatar";

const avatarColorOptions: AvatarColorOptions[] = [
  "blue",
  "green",
  "light blue",
  "orange",
  "pink",
  "yellow",
];

/**
 * Generates an avatar background color using the length of a person's full name.
 *
 * @param name - Person's full name.
 * @returns AvatarColors.
 * @example
 * getAvatarColor("Pam Beesly")
 * // returns "sky"
 */

export const getAvatarColor = (name: string): string =>
  avatarColorOptions[name.length % avatarColorOptions.length];
