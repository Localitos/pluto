import React from "react";
import type { SystemProp, Theme } from "@xstyled/styled-components";
import { Box } from "../../primitives/Box";

export type InputBoxTypes =
  | "date"
  | "datetime-local"
  | "email"
  | "hidden"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "time";

export interface InputBoxProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  children: NonNullable<React.ReactNode>;
  /** Sets the state of the input box to disabled so a user can not interact with it. This gets passed to the child element. */
  disabled?: boolean;
  /** Sets the state of the input box to an error state. This gets passed to the child element. */
  hasError?: boolean;
  /** Enables or disables hover effects that are added to the input box. */
  readOnly?: boolean;
  /** Sets the type of the input box. This gets passed to the child element. */
  type?: InputBoxTypes;
}

const getInputBoxStyles = (
  disabled?: boolean,
  hasError?: boolean,
  readOnly?: boolean,
  type?: InputBoxTypes
): {
  backgroundColor: SystemProp<keyof Theme["colors"], Theme> | "transparent";
  borderColor: SystemProp<keyof Theme["colors"], Theme>;
  borderWidth: SystemProp<keyof Theme["borderWidths"], Theme>;
} => {
  if (disabled || readOnly) {
    return {
      backgroundColor: "colorBackgroundWeak",
      borderColor: "colorBorderWeaker",
      borderWidth: "borderWidth10",
    };
  }
  if (hasError) {
    return {
      backgroundColor: {
        _: "colorBackground",
        hover: "colorBackgroundWeakest",
      },
      borderColor: "colorBorderError",
      borderWidth: "borderWidth10",
    };
  }
  if (type === "hidden") {
    return {
      backgroundColor: "transparent",
      borderColor: "colorBorderWeaker",
      borderWidth: "borderWidth0",
    };
  }
  return {
    backgroundColor: {
      _: "colorBackground",
      hover: "colorBackgroundWeakest",
    },
    borderColor: "colorBorderWeaker",
    borderWidth: "borderWidth10",
  };
};

/** Input box is the visual outer container used for text based form elements */
const InputBox = React.forwardRef<HTMLDivElement, InputBoxProps>(
  ({ children, disabled, hasError, readOnly, type, ...props }, ref) => {
    return (
      <Box.div
        alignItems="center"
        borderRadius="borderRadius20"
        borderStyle="borderSolid"
        color="colorText"
        cursor={disabled ? "not-allowed" : "auto"}
        data-disabled={disabled}
        data-has-error={hasError}
        data-hidden={type === "hidden" ? true : null}
        data-read-only={readOnly}
        display="flex"
        outlineColor={{ focusWithin: "colorBorderPrimary" }}
        outlineStyle={{ focusWithin: "solid" }}
        outlineWidth={{ focusWithin: "borderWidth20" }}
        position="relative"
        {...getInputBoxStyles(disabled, hasError, readOnly, type)}
        {...props}
        ref={ref}
      >
        {children}
      </Box.div>
    );
  }
);

InputBox.displayName = "InputBox";

export { InputBox };
