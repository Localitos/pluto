import type { Meta } from "@storybook/react";
import React from "react";
import { useUID } from "react-uid";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box } from "../../primitives/Box";
import { Button } from "../Button";
import { ControlledFormTextArea } from "./ControlledFormTextArea";
import { FormTextArea } from "./FormTextArea";

const meta: Meta<typeof FormTextArea> = {
  title: "Components/Form/FormTextArea",
  component: FormTextArea,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore ControlledFormTextArea has a required prop which confuses Storybook here.
  subcomponents: { ControlledFormTextArea },
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

export const AsControlledFormTextArea = (): JSX.Element => {
  const schema = yup.object().shape({
    flavor: yup
      .string()
      .required("A flavor is required.")
      .min(2, "Please enter more than two characters."),
    flavor1: yup
      .string()
      .required("A flavor is required.")
      .min(2, "Please enter more than two characters."),
    flavor2: yup.string(),
    flavor3: yup.string(),
    flavor4: yup.string(),
  });

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
    resolver: yupResolver(schema),
  });

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onSubmit: SubmitHandler<FormInputs> = (data) =>
    alert(JSON.stringify(data, null, 2));

  const inputID = useUID();
  return (
    <Box.form onSubmit={handleSubmit(onSubmit)}>
      <ControlledFormTextArea
        control={control}
        data-testid="test"
        hasError={!!formState.errors.flavor}
        helpText={
          formState.errors.flavor
            ? formState.errors.flavor.message
            : "Please enter a flavor."
        }
        id={`${inputID}-1`}
        label="Enter a flavor"
        name="flavor"
        placeholder="Maybe something crazy?"
        required
      />
      <ControlledFormTextArea
        control={control}
        hasError={!!formState.errors.flavor1}
        helpText={
          formState.errors.flavor1
            ? formState.errors.flavor1.message
            : "Please enter a flavor."
        }
        id={`${inputID}-1`}
        label="Enter a flavor"
        name="flavor1"
        placeholder="Maybe something crazy?"
        required
      />
      <ControlledFormTextArea
        control={control}
        id={`${inputID}-2`}
        label="Prefilled flavor"
        name="flavor2"
      />
      <ControlledFormTextArea
        control={control}
        disabled
        id={`${inputID}-2`}
        label="Disabled flavor"
        name="flavor3"
      />
      <ControlledFormTextArea
        control={control}
        id={`${inputID}-2`}
        label="Read-Only flavor"
        name="flavor4"
        readOnly
      />
      <Box.div>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Box.div>
    </Box.form>
  );
};
