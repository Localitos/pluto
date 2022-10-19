import { SystemProp, Theme } from "@xstyled/styled-components";
import React from "react";
import { Box } from "../../primitives/Box";
import { Icon, IconProps } from "../Icon";

type CalloutVariantOptions = "error" | "information" | "success" | "warning";

type CalloutProps = {
  /** The content of the callout. It can be text or valid text related HTML, i.e. anchor and strong elements. */
  children: React.ReactNode;

  /** The type of callout. */
  variant?: CalloutVariantOptions;

  /** Show or hide the callout background */
  withoutBackground?: boolean;
};

const getVariantProps = (
  variant: CalloutVariantOptions,
  withoutBackground: boolean
): {
  backgroundColor?: SystemProp<keyof Theme["colors"], Theme>;
} => {
  if (withoutBackground) {
    return {};
  }

  switch (variant) {
    case "error": {
      return {
        backgroundColor: "colorBackgroundError",
      };
    }
    case "warning": {
      return {
        backgroundColor: "colorBackgroundWarning",
      };
    }
    case "success": {
      return {
        backgroundColor: "colorBackgroundSuccess",
      };
    }
    default: {
      return {
        backgroundColor: "colorBackgroundInfo",
      };
    }
  }
};

const getIconVariantProps = (
  variant: CalloutVariantOptions
): {
  color: SystemProp<keyof Theme["colors"], Theme>;
  icon: IconProps["icon"];
} => {
  switch (variant) {
    case "error": {
      return {
        color: "colorIconError",
        icon: "XCircleIcon",
      };
    }
    case "warning": {
      return {
        color: "colorIconWarning",
        icon: "ExclamationTriangleIcon",
      };
    }
    case "success": {
      return {
        color: "colorIconSuccess",
        icon: "CheckCircleIcon",
      };
    }
    default: {
      return {
        color: "colorIconInfo",
        icon: "InformationCircleIcon",
      };
    }
  }
};

const getContentVariantProps = (
  variant: CalloutVariantOptions
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
    { variant = "information", children, withoutBackground = false, ...props },
    ref
  ) => {
    return (
      <Box.div
        borderRadius="borderRadius20"
        display="flex"
        gap="space40"
        padding="space50"
        ref={ref}
        role="alert"
        {...getVariantProps(variant, withoutBackground)}
        {...props}
      >
        <Box.span padding="space10">
          <Icon
            size="sizeIcon20"
            {...getIconVariantProps(variant)}
            decorative
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
  }
);

Callout.displayName = "Callout";

export { Callout };
