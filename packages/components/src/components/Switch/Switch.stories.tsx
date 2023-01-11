import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import React from "react";
import { Box } from "../../primitives/Box";
import { Button } from "../Button";
import { Switch } from "./Switch";

export default {
  component: Switch,
  title: "Components/Switch",
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Notifications",
};

export const Checked = Template.bind({});
Checked.args = {
  children: "Enable options",
  defaultChecked: true,
};

export const Controlled = (): JSX.Element => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Switch
      checked={checked}
      onCheckedChange={() =>
        setChecked((prevIsChecked) => (prevIsChecked === true ? false : true))
      }
    >
      Enable forms
    </Switch>
  );
};

interface FormInputs {
  enabled: string;
}

const onSubmit: SubmitHandler<FormInputs> = (data) =>
  alert(JSON.stringify(data, null, 2));

export const WithReactHookForm = (): JSX.Element => {
  const { control, handleSubmit } = useForm<FormInputs>({
    defaultValues: { enabled: "false" },
  });

  return (
    <Box.form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="enabled"
        render={({ field }) => (
          <Switch {...field} onCheckedChange={field.onChange}>
            Enable forms
          </Switch>
        )}
      />
      <Box.div marginTop="space70">
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Box.div>
    </Box.form>
  );
};
