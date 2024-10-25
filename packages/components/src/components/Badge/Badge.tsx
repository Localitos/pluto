import type { SystemProp, Theme } from "@xstyled/styled-components";
import React from "react";
import { Box } from "../../primitives/Box";
import { Icon } from "../Icon";
import { IconName } from "../Icon/types/IconName";

type BadgeSizeOptions = "large" | "small";
type BadgeColorOptions =
  | "blue"
  | "gray"
  | "green"
  | "purple"
  | "red"
  | "yellow";

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /** The contents of the badge. Can be text. */
  children: NonNullable<React.ReactNode>;
  /** Icon to be added on the left of the content. */
  icon?: IconName;
  /** Sets the size of the badge. */
  size?: BadgeSizeOptions;
  /** Sets the color of the badge. */
  color?: BadgeColorOptions;
}

const getColorProps = (
  color: BadgeColorOptions,
): {
  backgroundColor?: SystemProp<keyof Theme["colors"], Theme>;
  color?: SystemProp<keyof Theme["colors"], Theme>;
} => {
  switch (color) {
    case "gray": {
      return {
        backgroundColor: "badgeBgNeutral",
        color: "badgeContentNeutral",
      };
    }
    case "green": {
      return {
        backgroundColor: "badgeBgSuccess",
        color: "badgeContentSuccess",
      };
    }
    case "yellow": {
      return {
        backgroundColor: "badgeBgWarning",
        color: "badgeContentWarning",
      };
    }
    case "purple": {
      return {
        backgroundColor: "colorBackgroundLinkVisited",
        color: "colorTextLinkVisited",
      };
    }
    case "red": {
      return {
        backgroundColor: "badgeBgError",
        color: "badgeContentError",
      };
    }
    default: {
      return {
        backgroundColor: "badgeBgInfo",
        color: "badgeContentInfo",
      };
    }
  }
};

const getSizeProps = (
  size: BadgeSizeOptions,
): {
  fontSize: SystemProp<keyof Theme["fontSizes"], Theme>;
  paddingBottom: SystemProp<keyof Theme["space"], Theme>;
  paddingLeft: SystemProp<keyof Theme["space"], Theme>;
  paddingRight: SystemProp<keyof Theme["space"], Theme>;
  paddingTop: SystemProp<keyof Theme["space"], Theme>;
} => {
  if (size === "large") {
    return {
      fontSize: "fontSize30",
      paddingBottom: "d2",
      paddingLeft: "d4",
      paddingRight: "d4",
      paddingTop: "d1_5",
    };
  }
  return {
    fontSize: "fontSize10",
    paddingBottom: "d1",
    paddingLeft: "d3",
    paddingRight: "d3",
    paddingTop: "d1",
  };
};

const getIcon = (iconName: IconName, size: BadgeSizeOptions) => {
  const iconProps = (size: BadgeSizeOptions) =>
    size === "small" ? "sizeIcon30" : "sizeIcon40";

  return <Icon decorative icon={iconName} size={iconProps(size)} />;
};

/** This is a badge. A visual label representing a status, property, or some other metadata. */
const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, size = "small", color = "blue", icon, ...props }, ref) => {
    return (
      <Box.div
        alignItems="center"
        borderRadius="borderRadiusPill"
        display="inline-flex"
        fontWeight="fontWeightMedium"
        gap="d1"
        lineHeight="lineHeight10"
        ref={ref}
        {...getSizeProps(size)}
        {...getColorProps(color)}
        {...props}
      >
        {icon && getIcon(icon, size)}
        {children}
      </Box.div>
    );
  },
);

Badge.displayName = "Badge";

export { Badge };
