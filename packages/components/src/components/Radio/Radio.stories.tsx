import type { ComponentMeta } from "@storybook/react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import React from "react";
import { Box } from "../../primitives/Box";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";

export default {
  component: Radio,
  title: "Components/Radio",
} as ComponentMeta<typeof Radio>;

export const Default = (): JSX.Element => {
  return (
    <Box.form>
      <RadioGroup aria-label="View density" defaultValue="one">
        <Radio label="Default" value="one" />
        <Radio label="Secondary" value="two" />
        <Radio label="Third Option" value="three" />
      </RadioGroup>
    </Box.form>
  );
};

export const Disabled = (): JSX.Element => {
  return (
    <Box.form>
      <RadioGroup aria-label="View density" defaultValue="one">
        <Radio disabled label="Default" value="one" />
        <Radio disabled label="Secondary" value="two" />
        <Radio disabled label="Third Option" value="three" />
      </RadioGroup>
    </Box.form>
  );
};

export const Error = (): JSX.Element => {
  return (
    <Box.form>
      <RadioGroup aria-label="View density" defaultValue="one">
        <Radio hasError label="Default" value="one" />
        <Radio hasError label="Secondary" value="two" />
        <Radio hasError label="Third Option" value="three" />
      </RadioGroup>
    </Box.form>
  );
};

export const HorizontalOrientation = (): JSX.Element => {
  return (
    <Box.form>
      <RadioGroup
        aria-label="View density"
        defaultValue="one"
        orientation="horizontal"
      >
        <Radio label="Default" value="one" />
        <Radio label="Secondary" value="two" />
        <Radio label="Third Option" value="three" />
      </RadioGroup>
    </Box.form>
  );
};

interface FormInputs {
  RadioGroup: string;
}
const onSubmit: SubmitHandler<FormInputs> = (data) => alert(data);

export const WithReactHookForm = (): JSX.Element => {
  const { control, handleSubmit } = useForm<FormInputs>({
    defaultValues: { RadioGroup: "one" },
    mode: "onChange",
  });

  return (
    <Controller
      control={control}
      name="RadioGroup"
      render={({ field: { onChange, value } }) => (
        <Box.form onSubmit={handleSubmit(onSubmit)}>
          <RadioGroup
            aria-label="View density"
            defaultValue="one"
            onValueChange={(value) => onChange(value)}
            value={value}
          >
            <Radio label="Default" value="one" />
            <Radio label="Secondary" value="two" />
            <Radio label="Third Option" value="three" />
          </RadioGroup>
          <Box.button type="submit">Submit</Box.button>
        </Box.form>
      )}
    />
  );
};
