import type { Meta } from "@storybook/react";
import React from "react";
import { useUID } from "react-uid";
import { FormInput } from "./FormInput";

const meta: Meta<typeof FormInput> = {
  title: "Components/Form/FormInput",
  component: FormInput,
};

export default meta;

export const Default = (): JSX.Element => {
  const inputID = useUID();
  return (
    <FormInput
      inputId={inputID}
      label="Label text"
      name="input-field"
      placeholder="Placeholder text"
    />
  );
};

export const Required = (): JSX.Element => {
  const inputID = useUID();
  return (
    <FormInput
      helpText="Please enter some text."
      inputId={inputID}
      label="Label text"
      name="input-field"
      required
    />
  );
};

export const Disabled = (): JSX.Element => {
  const inputID = useUID();
  return (
    <FormInput
      disabled
      helpText="Please enter some text."
      inputId={inputID}
      label="Label text"
      name="input-field"
    />
  );
};

export const Error = (): JSX.Element => {
  const inputID = useUID();
  return (
    <FormInput
      hasError
      helpText="This is the error text."
      inputId={inputID}
      label="Label text"
      name="input-field"
    />
  );
};

export const Controlled = (): JSX.Element => {
  const [value, setValue] = React.useState("");
  const inputID = useUID();
  return (
    <FormInput
      helpText="Please enter some text."
      inputId={inputID}
      label="Label text"
      name="input-field"
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};
