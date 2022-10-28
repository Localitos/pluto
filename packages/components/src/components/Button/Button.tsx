import React from "react";
import * as HeroOutlineIcons from "@heroicons/react/24/outline";
import type { SystemProp, Theme } from "@xstyled/styled-components";
import { styled, theme } from "@localyze-pluto/theme";
import { Box } from "../../primitives/Box";
import { Icon } from "../Icon";

type ButtonSizeOptions = "large" | "small";
type ButtonVariantOptions = "primary" | "text";

type IconNames = keyof typeof HeroOutlineIcons;

export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "color"> {
  /** Sets the render element of the component. Either 'a' or 'button'.*/
  as?: "a" | "button";
  /** Add a description comment for each prop. */
  children: NonNullable<React.ReactNode>;
  /** If used as an 'a', the href is url that the link point to. */
  href?: string;
  /** Sets the button to be disabled. */
  isDisabled?: boolean;
  /** Icon to be added on the left of the content. */
  leadingIcon?: IconNames;
  /** Icon to be added on the right of the content. */
  trailingIcon?: IconNames;
  /** Sets the button state to loading. */
  loading?: boolean;
  /** Used with React Router or NextJS to set the route the anchor links to. */
  to?: string;
  /** Sets the size of the button. */
  size?: ButtonSizeOptions;
  /** Sets the variant of the button. */
  variant: ButtonVariantOptions;
}

const getButtonVariantStyles = (
  variant: ButtonVariantOptions
): {
  backgroundColor?: SystemProp<keyof Theme["colors"], Theme>;
  borderColor?: SystemProp<keyof Theme["colors"], Theme>;
  borderWidth?: SystemProp<keyof Theme["borderWidths"], Theme>;
  outlineColor?: SystemProp<keyof Theme["colors"], Theme>;
  outlineOffset?: SystemProp<keyof Theme["borderWidths"], Theme>;
  outlineStyle?: SystemProp<keyof Theme["borderStyles"], Theme>;
  outlineWidth?: SystemProp<keyof Theme["borderWidths"], Theme>;
} => {
  if (variant === "text") {
    return {
      borderWidth: "borderWidth0",
      outlineWidth: { focus: "borderWidth0" },
      outlineOffset: { focus: "borderWidth0" },
    };
  }

  return {
    borderWidth: "borderWidth10",
    outlineColor: { focus: "colorBorderPrimary" },
    outlineOffset: { focus: "borderWidth20" },
    outlineStyle: { focus: "borderSolid" },
    outlineWidth: { focus: "borderWidth20" },
    backgroundColor: {
      _: "colorBackgroundPrimary",
      hover: "colorBackgroundPrimaryStrong",
      disabled: "colorIconWeak",
    },
    borderColor: {
      _: "colorBorderPrimary",
      hover: "colorBorderPrimary",
      disabled: "colorIconWeak",
    },
  };
};

const getIcon = (iconName: IconNames, size: ButtonSizeOptions) => {
  const iconProps = (size: ButtonSizeOptions) =>
    size === "small" ? "sizeIcon30" : "sizeIcon40";

  return <Icon decorative icon={iconName} size={iconProps(size)} />;
};

const getTextColor = (
  variant: ButtonVariantOptions
): Record<string, string> => {
  if (variant === "text") {
    return {
      active: theme.colors.colorTextLink,
      hover: theme.colors.colorTextLinkStrong,
      disabled: theme.colors.colorText,
    };
  }

  return {
    active: theme.colors.colorTextInverse,
  };
};

const InnerButton = styled(Box.button)`
  color: ${({ variant }: ButtonProps) => getTextColor(variant).active};

  &::hover {
    color: ${({ variant }: ButtonProps) => getTextColor(variant).hover};
  }
  &::disabled {
    color: ${({ variant }: ButtonProps) => getTextColor(variant).disabled};
  }
`;

/** A button is a clickable element which communicates that users can trigger an action. */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      isDisabled,
      loading,
      leadingIcon,
      trailingIcon,
      size = "small",
      variant = "primary",
      ...props
    },
    ref
  ) => {
    return (
      <InnerButton
        alignItems="center"
        appearance="none"
        aria-busy={loading ? "true" : "false"}
        background="none"
        borderRadius="borderRadius20"
        borderStyle="borderSolid"
        cursor={{
          _: "default",
          hover: "pointer",
          disabled: "not-allowed",
          loading: "wait",
        }}
        disabled={isDisabled}
        display="inline-flex"
        fontFamily="fontFamilyModerat"
        fontSize={size === "large" ? "fontSize30" : "fontSize20"}
        fontWeight="fontWeightMedium"
        gap="space30"
        lineHeight={size === "large" ? "lineHeight40" : "lineHeight30"}
        paddingBottom={size === "large" ? "space40" : "space30"}
        paddingLeft={size === "large" ? "space50" : "space40"}
        paddingRight={size === "large" ? "space50" : "space40"}
        paddingTop={size === "large" ? "space40" : "space30"}
        ref={ref}
        textDecoration="none"
        transition="background-color 100ms ease-in, border-color 100ms ease-in"
        variant={variant}
        {...getButtonVariantStyles(variant)}
        {...props}
      >
        {leadingIcon && getIcon(leadingIcon, size)}
        {children}
        {trailingIcon && getIcon(trailingIcon, size)}
      </InnerButton>
    );
  }
);

Button.displayName = "Button";

export { Button };
