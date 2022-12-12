import type { ComponentMeta } from "@storybook/react";
import React from "react";
import { useFormik } from "formik";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useUID } from "react-uid";
import { HelpText } from "../HelpText";
import { Label } from "../Label";
import { Box } from "../../primitives/Box";
import { Button } from "../Button";
import { Select } from "./Select";
import type { SelectProps } from "./Select";

export default {
  component: Select,
  title: "Components/Select",
} as ComponentMeta<typeof Select>;

const selectItems: SelectProps["items"] = [
  { value: "Select an option", initial: true },
  { value: "Option One" },
  { value: "Option Two" },
  { value: "Option Three", disabled: true },
  { value: "Option Four" },
  {
    value:
      "Option Five which is a really long item and should overflow to the next line",
  },
];

export const Default = (): JSX.Element => {
  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form>
      <Label htmlFor={selectID}>Choose One</Label>
      <Select id={selectID} items={selectItems} name="select" />
      <HelpText id={helpTextID}>Please choose one of the values.</HelpText>
    </Box.form>
  );
};

export const Large = (): JSX.Element => {
  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form>
      <Label htmlFor={selectID}>Choose One</Label>
      <Select id={selectID} items={selectItems} name="select" size="large" />
      <HelpText id={helpTextID}>Please choose one of the values.</HelpText>
    </Box.form>
  );
};

export const Required = (): JSX.Element => {
  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form>
      <Label htmlFor={selectID} required>
        Choose One
      </Label>
      <Select id={selectID} items={selectItems} name="select" required />
      <HelpText id={helpTextID}>Please choose one of the values.</HelpText>
    </Box.form>
  );
};

export const Disabled = (): JSX.Element => {
  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form>
      <Label htmlFor={selectID}>Choose One</Label>
      <Select disabled id={selectID} items={selectItems} name="select" />
      <HelpText id={helpTextID}>Please choose one of the values.</HelpText>
    </Box.form>
  );
};

export const Error = (): JSX.Element => {
  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form>
      <Label htmlFor={selectID}>Choose One</Label>
      <Select hasError id={selectID} items={selectItems} name="select" />
      <HelpText hasError id={helpTextID}>
        This is an error message.
      </HelpText>
    </Box.form>
  );
};

export const LongItem = (): JSX.Element => {
  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form w="250px">
      <Label htmlFor={selectID}>Choose One</Label>
      <Select
        defaultValue={selectItems[5].value}
        id={selectID}
        items={selectItems}
        name="select"
      />
      <HelpText id={helpTextID}>Please choose one of the values.</HelpText>
    </Box.form>
  );
};

LongItem.parameters = {
  chromatic: { viewports: [320, 1200] },
};

export const WithFormik = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      select: selectItems[1].value,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form onSubmit={formik.handleSubmit}>
      <Label htmlFor={selectID}>Choose One</Label>
      <Select
        id={selectID}
        items={selectItems}
        name="select"
        setValue={(value) => formik.setFieldValue("select", value)}
        value={formik.values.select}
      />
      <HelpText id={helpTextID}>Please choose one of the values.</HelpText>
      <Box.div marginTop="space70">
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Box.div>
    </Box.form>
  );
};

export const WithReactHookForm = (): JSX.Element => {
  interface FormInputs {
    flavor: string;
  }

  const { control, handleSubmit } = useForm({
    defaultValues: {
      flavor: "Chocolate",
    },
  });

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onSubmit: SubmitHandler<FormInputs> = (data) =>
    alert(JSON.stringify(data, null, 2));

  const selectID = useUID();
  const helpTextID = useUID();
  return (
    <Box.form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor={selectID}>Choose a flavor</Label>
      <Controller
        control={control}
        name="flavor"
        render={({ field }) => (
          <Select
            {...field}
            id={selectID}
            items={[
              { value: "Chocolate" },
              { value: "Strawberry" },
              { value: "Vanilla" },
            ]}
            setValue={field.onChange}
          />
        )}
      />
      <HelpText id={helpTextID}>Please choose one of the flavors.</HelpText>
      <Box.div marginTop="space70">
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Box.div>
    </Box.form>
  );
};
