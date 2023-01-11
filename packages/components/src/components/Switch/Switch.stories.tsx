import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
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
  children: "Enable option",
  defaultChecked: true,
  name: "test",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled option",
  disabled: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  children: "Disabled option",
  defaultChecked: true,
  disabled: true,
};

export const WithHelpText = Template.bind({});
WithHelpText.args = {
  children: "Notifications",
  helpText: "This enables the notifications settings.",
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
