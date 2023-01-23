import type { Meta } from "@storybook/react";
import React from "react";
import { useUID } from "react-uid";
import type { SelectProps } from "../Select";
import { FormSelect } from "./FormSelect";

const meta: Meta<typeof FormSelect> = {
  title: "Components/Form/FormSelect",
  component: FormSelect,
};

export default meta;

// This duplicated in the first story so we can show the shape in the storybook code snippet.
const selectItems: SelectProps["items"] = [
  { value: "option-one", label: "Option One" },
  { value: "option-two", label: "Option Two" },
  { value: "option-three", label: "Option Three", disabled: true },
  { value: "option-four", label: "Option Four" },
  {
    value: "option-five",
    label:
      "Option Five which is a really long item and should overflow to the next line",
  },
];

export const Default = (): JSX.Element => {
  const selectID = useUID();

  const selectItems: SelectProps["items"] = [
    { value: "option-one", label: "Option One" },
    { value: "option-two", label: "Option Two" },
    { value: "option-three", label: "Option Three", disabled: true },
    { value: "option-four", label: "Option Four" },
    {
      value: "option-five",
      label:
        "Option Five which is a really long item and should overflow to the next line",
    },
  ];

  return (
    <FormSelect
      id={selectID}
      items={selectItems}
      label="Label text"
      name="select-field"
    />
  );
};

export const Required = (): JSX.Element => {
  const selectID = useUID();
  return (
    <FormSelect
      helpText="Please choose one of the values."
      id={selectID}
      items={selectItems}
      label="Label text"
      name="select-field"
      required
    />
  );
};

export const Disabled = (): JSX.Element => {
  const selectID = useUID();
  return (
    <FormSelect
      disabled
      helpText="Please choose one of the values."
      id={selectID}
      items={selectItems}
      label="Label text"
      name="select-field"
    />
  );
};

export const Error = (): JSX.Element => {
  const selectID = useUID();
  return (
    <FormSelect
      hasError
      helpText="This is the error text."
      id={selectID}
      items={selectItems}
      label="Label text"
      name="select-field"
    />
  );
};

export const MultiSelect = (): JSX.Element => {
  const selectID = useUID();
  return (
    <FormSelect
      defaultValue={[selectItems[0].value, selectItems[1].value]}
      helpText="Please choose one of the values."
      id={selectID}
      items={selectItems}
      label="Label text"
      name="select-field"
    />
  );
};

export const Controlled = (): JSX.Element => {
  const [selectValue, setSelectValue] =
    React.useState<SelectProps["value"]>("");
  const selectID = useUID();
  return (
    <FormSelect
      helpText="Please choose one of the values."
      id={selectID}
      items={selectItems}
      label="Label text"
      name="select-field"
      setValue={(value) => setSelectValue(value)}
      value={selectValue}
    />
  );
};
