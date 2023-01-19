import type { Meta } from "@storybook/react";
import React from "react";
import { useUID } from "react-uid";
import { FormTextArea } from "./FormTextArea";

const meta: Meta<typeof FormTextArea> = {
  title: "Components/Form/FormTextArea",
  component: FormTextArea,
};

export default meta;

export const Default = (): JSX.Element => {
  const textAreaID = useUID();
  return (
    <FormTextArea
      id={textAreaID}
      label="Label text"
      name="textarea-field"
      placeholder="Placeholder text"
    />
  );
};

export const Required = (): JSX.Element => {
  const textAreaID = useUID();
  return (
    <FormTextArea
      helpText="Please enter some text."
      id={textAreaID}
      label="Label text"
      name="textarea-field"
      required
    />
  );
};

export const Disabled = (): JSX.Element => {
  const textAreaID = useUID();
  return (
    <FormTextArea
      disabled
      helpText="Please enter some text."
      id={textAreaID}
      label="Label text"
      name="textarea-field"
    />
  );
};

export const Error = (): JSX.Element => {
  const textAreaID = useUID();
  return (
    <FormTextArea
      hasError
      helpText="This is the error text."
      id={textAreaID}
      label="Label text"
      name="textarea-field"
    />
  );
};

export const Controlled = (): JSX.Element => {
  const [value, setValue] = React.useState("");
  const textAreaID = useUID();
  return (
    <FormTextArea
      helpText="Please enter some text."
      id={textAreaID}
      label="Label text"
      name="textarea-field"
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};
