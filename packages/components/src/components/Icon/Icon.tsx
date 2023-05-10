import React from "react";
import * as HeroOutlineIcons from "@heroicons/react/24/outline";
import type { SystemProp, Theme } from "@xstyled/styled-components";
import { Box } from "../../primitives/Box";

type IconNames = keyof typeof HeroOutlineIcons;

export interface IconProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /** Changes the color of the icon. */
  color?: SystemProp<keyof Theme["colors"], Theme>;
  /** Specifies whether the icon is decorative or not. */
  decorative: boolean;
  /** Changes the dispay style of the icon container. */
  display?: "block" | "flex" | "inline-block" | "inline-flex";
  /** Changes the icon being rendered. */
  icon: IconNames;
  /** Adjusts the size of the icon being rendered. */
  size?: SystemProp<keyof Theme["sizes"], Theme>;
  /** Controls the aria-label of the icon rendered.  */
  title?: string;
  /** Sets the render element of the component. */
  as?: React.ComponentProps<typeof Box.div>["as"];
}

/** Icons are small graphical representation of a program or a function. */
const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  (
    {
      color,
      decorative,
      display = "inline-block",
      icon,
      size = "sizeIcon40",
      title,
      as = "div",
      ...props
    },
    ref
  ) => {
    if (!decorative && title == null) {
      throw new Error(`${icon}: Missing a title for non-decorative icon.`);
    }

    // eslint-disable-next-line import/namespace
    const RenderedIcon = HeroOutlineIcons[icon];

    return (
      <Box.div
        as={as}
        color={color}
        display={display}
        h={size}
        ref={ref}
        w={size}
        {...props}
      >
        <Box.svg
          aria-hidden={decorative}
          aria-label={title}
          as={RenderedIcon}
          display="block"
          verticalAlign="middle"
        />
      </Box.div>
    );
  }
);

Icon.displayName = "Icon";

export { Icon };
