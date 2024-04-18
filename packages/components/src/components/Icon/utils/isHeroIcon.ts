import * as HeroOutlineIcons from "../HeroIcons";
import { IconName } from "../types/IconName";

export const isHeroIcon = (
  name: IconName,
): name is keyof typeof HeroOutlineIcons => {
  return name in HeroOutlineIcons;
};
