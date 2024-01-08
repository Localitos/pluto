import React from "react";
import { Box } from "../../primitives/Box";
import { InputBox } from "../InputBox";

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "color"> {
  /** Sets the state of the textarea to disabled so a user can not interact with it. */
  disabled?: boolean;
  /** Sets the state of the textarea to an error state. */
  hasError?: boolean;
  /** Sets the height of the textarea. */
  height?: never;
  /** The `id` of the textarea. */
  id?: string;
  /** The `name` of the textarea. */
  name?: string;
  /** The text to be used for the textarea placeholder. */
  placeholder?: string;
  /** Sets the textarea state to ready only, so the value isn't editable. */
  readOnly?: boolean;
  /** Sets the textarea state to required, so a user has to provide a value in order to be valid. */
  required?: boolean;
}

/** A textarea is a form element that allows users to enter text on multiple lines */
const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      children,
      disabled,
      hasError,
      id,
      name,
      placeholder,
      readOnly,
      required,
      ...props
    },
    ref,
  ) => {
    return (
      <InputBox disabled={disabled} hasError={hasError} readOnly={readOnly}>
        <Box.textarea
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
          fontFamily="fontFamilyNotoSans"
          fontSize="fontSize20"
          fontWeight="fontWeightMedium"
          id={id}
          lineHeight="lineHeight30"
          margin="space0"
          minHeight="100px"
          name={name}
          outline="none"
          paddingBottom="space30"
          paddingLeft="space40"
          paddingRight="space40"
          paddingTop="space30"
          placeholder={placeholder}
          readOnly={readOnly}
          ref={ref}
          required={required}
          resize="vertical"
          textAlign="left"
          w="100%"
          {...props}
        >
          {children}
        </Box.textarea>
      </InputBox>
    );
  },
);

TextArea.displayName = "TextArea";

export { TextArea };
