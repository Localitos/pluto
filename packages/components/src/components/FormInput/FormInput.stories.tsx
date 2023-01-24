import type { Meta } from "@storybook/react";
import React from "react";
import { useUID } from "react-uid";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box } from "../../primitives/Box";
import { Button } from "../Button";
import { FormInput } from "./FormInput";
import { ControlledFormInput } from "./ControlledFormInput";

const meta: Meta<typeof FormInput> = {
  title: "Components/Form/FormInput",
  component: FormInput,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore Table has a required prop which confuses Storybook here.
  subcomponents: { ControlledFormInput },
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

export const WithReactHookForm = (): JSX.Element => {
  interface FormInputs {
    flavor: string;
    flavor1: string;
    flavor2: string;
    flavor3: string;
    flavor4: string;
  }

  const { control, handleSubmit, formState } = useForm<FormInputs>({
    defaultValues: {
      flavor: "",
      flavor1: "W",
      flavor2: "Chocolate",
      flavor3: "Vanilla",
      flavor4: "Strawberry",
    },
  });

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onSubmit: SubmitHandler<FormInputs> = (data) =>
    alert(JSON.stringify(data, null, 2));

  const inputID = useUID();
  return (
    <Box.form onSubmit={handleSubmit(onSubmit)}>
      <ControlledFormInput
        control={control}
        errorText={
          formState.errors.flavor?.type === "minLength"
            ? "Please enter more than two characters."
            : "Please enter a flavor."
        }
        helpText="Please enter a flavor."
        id={`${inputID}-1`}
        label="Enter a flavor"
        name="flavor"
        placeholder="Maybe something crazy?"
        required
        rules={{ minLength: 2, required: true }}
        type="text"
      />
      <ControlledFormInput
        control={control}
        errorText={
          formState.errors.flavor1?.type === "minLength"
            ? "Please enter more than two characters."
            : "Please enter a flavor."
        }
        id={`${inputID}-1`}
        label="Enter a flavor"
        name="flavor1"
        placeholder="Maybe something crazy?"
        required
        rules={{ minLength: 2, required: true }}
        type="text"
      />
      <ControlledFormInput
        control={control}
        id={`${inputID}-2`}
        label="Prefilled flavor"
        name="flavor2"
        type="text"
      />
      <ControlledFormInput
        control={control}
        disabled
        id={`${inputID}-2`}
        label="Disabled flavor"
        name="flavor3"
        type="text"
      />
      <ControlledFormInput
        control={control}
        id={`${inputID}-2`}
        label="Read-Only flavor"
        name="flavor4"
        readOnly
        type="text"
      />
      <Box.div>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Box.div>
    </Box.form>
  );
};
