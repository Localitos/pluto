import * as HeroOutlineIcons from "@heroicons/react/24/outline";
import { IconName } from "../types/IconName";

export const isHeroIcon = (
  name: IconName,
): name is keyof typeof HeroOutlineIcons => {
  return name in HeroOutlineIcons;
};
