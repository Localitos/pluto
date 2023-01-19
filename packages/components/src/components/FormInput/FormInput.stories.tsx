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
      id={inputID}
      label="Label text"
      name="input-field"
      placeholder="Placeholder text"
      type="text"
    />
  );
};

export const Required = (): JSX.Element => {
  const inputID = useUID();
  return (
    <FormInput
      helpText="Please enter some text."
      id={inputID}
      label="Label text"
      name="input-field"
      required
      type="text"
    />
  );
};

export const Disabled = (): JSX.Element => {
  const inputID = useUID();
  return (
    <FormInput
      disabled
      helpText="Please enter some text."
      id={inputID}
      label="Label text"
      name="input-field"
      type="text"
    />
  );
};

export const Error = (): JSX.Element => {
  const inputID = useUID();
  return (
    <FormInput
      hasError
      helpText="This is the error text."
      id={inputID}
      label="Label text"
      name="input-field"
      type="text"
    />
  );
};

export const Controlled = (): JSX.Element => {
  const [value, setValue] = React.useState("");
  const inputID = useUID();
  return (
    <FormInput
      helpText="Please enter some text."
      id={inputID}
      label="Label text"
      name="input-field"
      onChange={(e) => setValue(e.target.value)}
      type="text"
      value={value}
    />
  );
};
