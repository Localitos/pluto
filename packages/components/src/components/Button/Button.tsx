import React from "react";
import * as HeroOutlineIcons from "@heroicons/react/24/outline";
import type { SystemProp, Theme } from "@xstyled/styled-components";
import { Box } from "../../primitives/Box";
import { Icon } from "../Icon";

type ButtonSizeOptions = "large" | "small";
type ButtonVariantOptions =
  | "destructive"
  | "ghost"
  | "outline"
  | "primary"
  | "secondary";

type IconNames = keyof typeof HeroOutlineIcons;

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  /** Sets the variant of the button. */
  variant: ButtonVariantOptions;
  /** Sets the render element of the component. */
  as?: React.ComponentProps<typeof Box.button>["as"];
  /** Button content */
  children?: React.ReactNode;
  /** If used as an 'a', the href is url that the link point to. */
  href?: string;
  /** If used as an 'a', the target attribute tells the browser where the linked document should be loaded. */
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  /** If used as an 'a', the rel attribute defines the relationship between a linked resource and the current document. */
  rel?: React.AnchorHTMLAttributes<HTMLAnchorElement>["rel"];
  /** Sets the button to be disabled. */
  disabled?: boolean;
  /** Icon to be added on the left of the content. */
  leadingIcon?: IconNames;
  /** Icon to be added on the right of the content. */
  trailingIcon?: IconNames;
  /** Sets the button state to loading. */
  loading?: boolean;
  /** Used with React Router to set the route the button links to. */
  to?: string;
  /** Sets the size of the button. */
  size?: ButtonSizeOptions;
  /** True to have a full width button, false otherwise. */
  fullWidth?: boolean;
  /** True to use icon only version, false otherwise. */
  iconOnly?: boolean;
}

const getButtonVariantStyles = (
  variant: ButtonVariantOptions,
  iconOnly: boolean
): {
  color?: SystemProp<keyof Theme["colors"], Theme>;
  backgroundColor?: SystemProp<keyof Theme["colors"], Theme>;
  borderColor?: SystemProp<keyof Theme["colors"], Theme>;
  borderWidth?: SystemProp<keyof Theme["borderWidths"], Theme>;
  outlineColor?: SystemProp<keyof Theme["colors"], Theme>;
} => {
  switch (variant) {
    case "ghost": {
      if (iconOnly) {
        return {
          color: {
            _: "colorIconWeak",
            disabled: "colorIconWeaker",
          },
          backgroundColor: {
            hover: "colorBackgroundInfo",
            focus: "colorBackground",
          },
          borderWidth: "borderWidth0",
        };
      }
      return {
        color: {
          _: "colorTextLink",
          active: "colorTextLink",
          hover: "colorTextLinkStrong",
          disabled: "colorText",
        },
        borderWidth: "borderWidth0",
        outlineColor: { focus: "colorBorderPrimary" },
      };
    }
    case "secondary": {
      return {
        color: {
          _: "colorTextLink",
          disabled: "colorText",
        },
        borderWidth: "borderWidth10",
        borderColor: { _: "colorBorderPrimary", disabled: "colorBorder" },
        backgroundColor: {
          _: "colorBackground",
          disabled: "colorBackground",
          active: "colorBackground",
          hover: "colorBackgroundInfo",
        },
        outlineColor: { focus: "colorBorderPrimary" },
      };
    }
    case "destructive": {
      return {
        borderWidth: "borderWidth10",
        color: "colorTextInverse",
        backgroundColor: {
          _: "colorBackgroundDestructive",
          active: "colorBackgroundDestructive",
          hover: "colorBackgroundDestructiveStrong",
          disabled: "colorIconWeak",
        },
        borderColor: {
          _: "colorBackgroundDestructiveStrong",
          active: "colorBackgroundDestructive",
          hover: "colorBackgroundDestructiveStrong",
          disabled: "colorIconWeak",
        },
        outlineColor: { focus: "colorBackgroundDestructive" },
      };
    }
    case "outline": {
      return {
        color: {
          _: "colorTextLink",
          disabled: "colorText",
        },
        borderWidth: "borderWidth10",
        borderColor: { _: "colorBorderPrimary", disabled: "colorBorder" },
        backgroundColor: {
          active: "colorBackground",
          hover: "colorBackgroundInfo",
        },
        outlineColor: { focus: "colorBorderPrimary" },
      };
    }
    default: {
      return {
        borderWidth: "borderWidth10",
        color: "colorTextInverse",
        backgroundColor: {
          _: "colorBackgroundPrimary",
          active: "colorBackgroundPrimary",
          hover: "colorBackgroundPrimaryStrong",
          disabled: "colorIconWeak",
        },
        borderColor: {
          _: "colorBorderPrimary",
          active: "colorBorderPrimary",
          hover: "colorBorderPrimary",
          disabled: "colorIconWeak",
        },
        outlineColor: { focus: "colorBorderPrimary" },
      };
    }
  }
};

const getIcon = (iconName: IconNames, size: ButtonSizeOptions) => {
  const iconProps = (size: ButtonSizeOptions) =>
    size === "small" ? "sizeIcon30" : "sizeIcon40";

  return <Icon decorative icon={iconName} size={iconProps(size)} />;
};

const getButtonPadding = (
  size: ButtonSizeOptions,
  iconOnly: boolean,
  hasLeadingIcon: boolean,
  hasTrailingIcon: boolean
): {
  paddingBottom: SystemProp<keyof Theme["space"], Theme>;
  paddingLeft: SystemProp<keyof Theme["space"], Theme>;
  paddingRight: SystemProp<keyof Theme["space"], Theme>;
  paddingTop: SystemProp<keyof Theme["space"], Theme>;
} => {
  const getDefaultPadding = (
    size: ButtonSizeOptions
  ): SystemProp<keyof Theme["space"], Theme> =>
    size === "large" ? "space40" : "space30";

  if (iconOnly) {
    return {
      paddingBottom: getDefaultPadding(size),
      paddingTop: getDefaultPadding(size),
      paddingLeft: getDefaultPadding(size),
      paddingRight: getDefaultPadding(size),
    };
  }

  if (!hasLeadingIcon && !hasTrailingIcon) {
    return {
      paddingBottom: getDefaultPadding(size),
      paddingTop: getDefaultPadding(size),
      paddingLeft: size === "large" ? "space50" : "space40",
      paddingRight: size === "large" ? "space50" : "space40",
    };
  }

  if (hasLeadingIcon) {
    return {
      paddingBottom: getDefaultPadding(size),
      paddingTop: getDefaultPadding(size),
      paddingLeft: getDefaultPadding(size),
      paddingRight: size === "large" ? "space50" : "space40",
    };
  }

  return {
    paddingBottom: getDefaultPadding(size),
    paddingTop: getDefaultPadding(size),
    paddingLeft: size === "large" ? "space50" : "space40",
    paddingRight: getDefaultPadding(size),
  };
};

/** A button is a clickable element which communicates that users can trigger an action. */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled,
      loading,
      leadingIcon,
      trailingIcon,
      fullWidth,
      size = "small",
      iconOnly = false,
      variant = "primary",
      ...props
    },
    ref
  ) => {
    if (iconOnly && props["aria-label"] === undefined) {
      throw new Error("Missing a aria-label for icon only button.");
    }

    /**
     * When we use the as prop with xstyled, styled-components
     * changes the component type to StyledComponentPropsWithAs.
     * This type has a string color attribute, which causes
     * a type conflict with the color attribute from xstyled
     * components
     */
    return (
      <>
        <Box.button
          alignItems="center"
          appearance="none"
          aria-busy={loading ? "true" : "false"}
          background="none"
          borderRadius="borderRadius20"
          borderStyle="borderStyleSolid"
          cursor={{
            _: "default",
            hover: "pointer",
            disabled: "not-allowed",
            loading: "wait",
          }}
          disabled={disabled}
          display="inline-flex"
          fontFamily="fontFamilyModerat"
          fontSize={size === "large" ? "fontSize30" : "fontSize20"}
          fontWeight="fontWeightMedium"
          gap="space30"
          justifyContent="center"
          lineHeight={size === "large" ? "lineHeight40" : "lineHeight30"}
          outlineOffset={{ focus: "borderWidth20" }}
          outlineStyle={{ focus: "borderStyleSolid" }}
          outlineWidth={{ active: "borderWidth0", focus: "borderWidth20" }}
          ref={ref}
          textDecoration="none"
          transition="background-color 100ms ease-in, border-color 100ms ease-in"
          w={fullWidth ? "100%" : "auto"}
          {...getButtonPadding(size, iconOnly, !!leadingIcon, !!trailingIcon)}
          {...getButtonVariantStyles(variant, iconOnly)}
          {...props}
        >
          {leadingIcon && getIcon(leadingIcon, size)}
          {!iconOnly && children}
          {trailingIcon && getIcon(trailingIcon, size)}
        </Box.button>
      </>
    );
  }
);

Button.displayName = "Button";

export { Button };
