import React from "react";
import type { SystemProp, Theme } from "@xstyled/styled-components";
import { Box, BoxProps } from "../../primitives/Box";
import { IconName } from "./types/IconName";
import { LucideIcons } from "./LucideIcons";

export interface IconProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    BoxProps {
  /** Changes the color of the icon. */
  color?: SystemProp<keyof Theme["colors"], Theme>;
  /** Specifies whether the icon is decorative or not. */
  decorative: boolean;
  /** Changes the dispay style of the icon container. */
  display?: "block" | "flex" | "inline-block" | "inline-flex";
  /** Changes the icon being rendered. */
  icon: IconName;
  /** Adjusts the size of the icon being rendered. */
  size?: SystemProp<keyof Theme["sizes"], Theme>;
  /** Controls the aria-label of the icon rendered.  */
  title?: string;
  /** Sets the render element of the component. */
  as?: React.ComponentType<any> | string; // eslint-disable-line @typescript-eslint/no-explicit-any
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
    ref,
  ) => {
    if (!decorative && title == null) {
      throw new Error(`${icon}: Missing a title for non-decorative icon.`);
    }

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
          as={LucideIcons[icon]}
          display="block"
          h={size}
          verticalAlign="middle"
          w={size}
        />
      </Box.div>
    );
  },
);

Icon.displayName = "Icon";

export { Icon };
