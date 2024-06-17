import { SystemProp, Theme } from "@xstyled/styled-components";
import React from "react";
import { Box } from "../../primitives/Box";
import { Icon, IconProps } from "../Icon";
import { IconName } from "../Icon/types/IconName";

type CalloutVariantOptions = "error" | "information" | "success" | "warning";

export interface CalloutProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /** The content of the callout. It can be text or valid text related HTML, i.e. anchor and strong elements. */
  children: React.ReactNode;

  /** The type of callout. */
  variant?: CalloutVariantOptions;

  /** Show or hide the callout background */
  withoutBackground?: boolean;

  /** Overrides default icon for variant */
  icon?: IconName;
}

const getVariantProps = (
  variant: CalloutVariantOptions,
  withoutBackground: boolean,
): {
  backgroundColor?: SystemProp<keyof Theme["colors"], Theme>;
  padding?: SystemProp<keyof Theme["space"], Theme>;
} => {
  if (withoutBackground) {
    return {};
  }

  const padding = "space50";

  switch (variant) {
    case "error": {
      return {
        padding,
        backgroundColor: "colorBackgroundError",
      };
    }
    case "warning": {
      return {
        padding,
        backgroundColor: "colorBackgroundWarning",
      };
    }
    case "success": {
      return {
        padding,
        backgroundColor: "colorBackgroundSuccess",
      };
    }
    default: {
      return {
        padding,
        backgroundColor: "colorBackgroundInfo",
      };
    }
  }
};

const getIconVariantProps = (
  variant: CalloutVariantOptions,
): {
  color: SystemProp<keyof Theme["colors"], Theme>;
  icon: IconProps["icon"];
} => {
  switch (variant) {
    case "error": {
      return {
        color: "colorIconError",
        icon: "circle-x",
      };
    }
    case "warning": {
      return {
        color: "colorIconWarning",
        icon: "circle-alert",
      };
    }
    case "success": {
      return {
        color: "colorIconSuccess",
        icon: "circle-check",
      };
    }
    default: {
      return {
        color: "colorIconInfo",
        icon: "info",
      };
    }
  }
};

const getContentVariantProps = (
  variant: CalloutVariantOptions,
): {
  color: SystemProp<keyof Theme["colors"], Theme>;
} => {
  switch (variant) {
    case "error": {
      return {
        color: "colorTextError",
      };
    }
    case "warning": {
      return {
        color: "colorTextWarning",
      };
    }
    case "success": {
      return {
        color: "colorTextSuccess",
      };
    }
    default: {
      return {
        color: "colorTextInfo",
      };
    }
  }
};

/** A callout is a bar used to give user information. */
const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  (
    {
      variant = "information",
      children,
      withoutBackground = false,
      icon,
      ...props
    },
    ref,
  ) => {
    const iconProps = getIconVariantProps(variant);

    return (
      <Box.div
        borderRadius="borderRadius20"
        display="flex"
        gap="space40"
        ref={ref}
        {...getVariantProps(variant, withoutBackground)}
        {...props}
      >
        <Box.span padding="space10">
          <Icon
            color={iconProps.color}
            decorative
            icon={icon || iconProps.icon}
            size="sizeIcon20"
          />
        </Box.span>
        <Box.span
          fontSize="fontSize20"
          lineHeight="lineHeight30"
          {...getContentVariantProps(variant)}
        >
          {children}
        </Box.span>
      </Box.div>
    );
  },
);

Callout.displayName = "Callout";

export { Callout };
