import type { Meta } from "@storybook/react";
import React from "react";
import { useUID } from "react-uid";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import type { SelectProps } from "../Select";
import { Box } from "../../primitives/Box";
import { Button } from "../Button";
import { ControlledFormSelect } from "./ControlledFormSelect";
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

export const AsControlledFormSelect = (): JSX.Element => {
  const schema = yup.object().shape({
    flavor: yup.string().required("A flavor is required."),
    flavor1: yup.string(),
    flavor2: yup.array(yup.string()),
  });

  interface FormInputs {
    flavor: string;
    flavor1?: string;
    flavor2?: string[];
  }

  const { control, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      flavor: "",
      flavor1: selectItems[1].value,
      flavor2: [selectItems[0].value, selectItems[2].value],
    },
    reValidateMode: "onBlur",
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onSubmit: SubmitHandler<FormInputs> = (data) =>
    alert(JSON.stringify(data, null, 2));

  const selectID = useUID();
  return (
    <Box.form onSubmit={handleSubmit(onSubmit)}>
      <Box.div display="flex" flexDirection="column" gap="space50">
        <ControlledFormSelect
          control={control}
          helpText={"Please select a flavor."}
          id={`${selectID}-1`}
          items={selectItems}
          label="Select a flavor"
          name="flavor"
          placeholder="Maybe something crazy?"
          required
        />
        <ControlledFormSelect
          control={control}
          id={`${selectID}-2`}
          items={selectItems}
          label="Select a flavor"
          name="flavor1"
        />
        <ControlledFormSelect
          control={control}
          id={`${selectID}-3`}
          items={selectItems}
          label="Select multiple flavors"
          name="flavor2"
        />
        <Box.div>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Box.div>
      </Box.div>
    </Box.form>
  );
};
