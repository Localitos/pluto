import type { ComponentMeta } from "@storybook/react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import React from "react";
import { Box } from "../../primitives/Box";
import { Button } from "../Button";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";
import { ControlledRadioGroup } from "./ControlledRadioGroup/ControlledRadioGroup";

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

export const AsControlledRadioGroup = (): JSX.Element => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      radio: "default",
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}
    >
      <ControlledRadioGroup
        control={control}
        id="radio-group-controlled"
        name="radio"
      >
        <Radio label="Default" value="default" />
        <Radio label="Secondary" value="secondary" />
        <Radio label="Third Option" value="third option" />
      </ControlledRadioGroup>

      <Box.div marginTop="space40">
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Box.div>
    </form>
  );
};
