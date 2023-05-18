import { LucideIcons } from "./LucideIcons";
import { IconName } from "./IconName";

export const isLucideIcon = (
  name: IconName
): name is keyof typeof LucideIcons => {
  return name in LucideIcons;
};
