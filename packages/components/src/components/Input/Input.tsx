import React from "react";
import { InputBox } from "../InputBox";
import { Box } from "../../primitives/Box";

export type InputTypes =
  | "date"
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
  disabled?: boolean;
  /** Changes the font family of the input. */
  hasError?: boolean;
  /** The `id` of the input. */
  id?: string;
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
      size = "small",
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
          cursor="auto"
          disabled={disabled}
          display="block"
          fontFamily="inherit"
          fontSize={size === "large" ? "fontSize30" : "fontSize20"}
          fontWeight="inherit"
          id={id}
          lineHeight="inherit"
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
          textAlign="inherit"
          w="100%"
          {...typeProps}
          ref={ref}
          value={value}
          {...props}
        />
      </InputBox>
    );
  }
);

Input.displayName = "Input";

export { Input };
