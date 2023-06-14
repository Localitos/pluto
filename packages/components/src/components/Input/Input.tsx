import React from "react";
import { InputBox } from "../InputBox";
import { Box } from "../../primitives/Box";
import { Icon } from "../Icon";
import { IconName } from "../Icon/types/IconName";

export type InputTypes =
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

export interface InputTypeProps {
  type: InputTypes;
  inputmode?: string;
  pattern?: string;
}

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "color" | "size"> {
  /** Sets the state of the input to disabled so a user can not interact with it. */
  disabled?: boolean;
  /** Sets the state of the input to an error state. */
  hasError?: boolean;
  /** The `id` of the input. */
  id?: string;
  /** Icon to be added on the left of the input. */
  leadingIcon?: IconName;
  /** Icon to be added on the right of the input. */
  trailingIcon?: IconName;
  /** The `name` of the input. */
  name?: string;
  /** The text to be used for the input placeholder. */
  placeholder?: string;
  /** Sets the input state to ready only, so the value isn't editable. */
  readOnly?: boolean;
  /** Sets the input state to required, so a user has to provide a value in order to be valid. */
  required?: boolean;
  /** Changes the input type. */
  type: InputTypes;
  /** The value of the input. */
  value?: string;
  /** Changes the size of the input. */
  size?: "large" | "small";
}

const getInputIcon = (
  iconName: IconName,
  size?: "large" | "small",
  isLeadingIcon?: boolean,
  isTrailingIcon?: boolean
) => {
  return (
    <Box.div
      display="inline-flex"
      marginLeft={isLeadingIcon ? "space40" : undefined}
      marginRight={isTrailingIcon ? "space40" : undefined}
    >
      <Icon
        color="colorIconStrong"
        decorative
        icon={iconName}
        size={size === "large" ? "sizeIcon30" : "sizeIcon20"}
      />
    </Box.div>
  );
};

/** An input is a form element that lets users enter one of various types of text on a single line. */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      disabled,
      hasError,
      id,
      name,
      placeholder,
      readOnly,
      required,
      leadingIcon,
      size = "small",
      trailingIcon,
      type,
      value,
      ...props
    },
    ref
  ) => {
    const typeProps: InputTypeProps = { type };

    return (
      <InputBox
        data-hidden={type === "hidden" ? true : null}
        disabled={disabled}
        hasError={hasError}
        readOnly={readOnly}
        type={type}
      >
        {leadingIcon && getInputIcon(leadingIcon, size, true)}
        <Box.input
          appearance="none"
          aria-invalid={hasError}
          aria-readonly={readOnly}
          backgroundColor="transparent"
          border="none"
          borderRadius="borderRadius20"
          boxShadow="none"
          color={{
            _: "colorTextStronger",
            disabled: "colorText",
            placeholder: "colorText",
          }}
          cursor={disabled ? "not-allowed" : "auto"}
          disabled={disabled}
          display="block"
          fontFamily="fontFamilyModerat"
          fontSize={size === "large" ? "fontSize30" : "fontSize20"}
          fontWeight="fontWeightMedium"
          id={id}
          lineHeight="lineHeight30"
          margin="space0"
          name={name}
          outline="none"
          paddingBottom={size === "large" ? "space40" : "space30"}
          paddingLeft="space40"
          paddingRight="space40"
          paddingTop={size === "large" ? "space40" : "space30"}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          resize="none"
          textAlign="left"
          w="100%"
          {...typeProps}
          ref={ref}
          value={value}
          {...props}
        />
        {trailingIcon && getInputIcon(trailingIcon, size, undefined, true)}
      </InputBox>
    );
  }
);

Input.displayName = "Input";

export { Input };
