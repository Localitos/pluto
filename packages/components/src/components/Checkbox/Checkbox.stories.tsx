import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState, useRef } from "react";
import { Button } from "../Button";
import { Text } from "../../primitives/Text";
import { Checkbox, CheckedState } from "./Checkbox";

export default {
  component: Checkbox,
  title: "Components/Checkbox",
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <form>
    <Checkbox {...args} />
  </form>
);

export const Default = Template.bind({});
Default.args = {
  children: "Checkbox",
  id: "checkbox-default",
};

export const LongText = Template.bind({});
LongText.args = {
  children:
    "Checkbox with a long text Checkbox with a long text Checkbox with a long text Checkbox with a long text Checkbox with a long text Checkbox with a long text Checkbox with a long text Checkbox with a long text Checkbox with a long text Checkbox with a long text Checkbox with a long text Checkbox with a long text Checkbox with a long text ",
  id: "checkbox-long-text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Checkbox",
  id: "checkbox-disabled",
  disabled: true,
};

export const DisabledAndChecked = (): React.ReactElement => {
  return (
    <>
      <Checkbox checked disabled id="checkbox-disabled-and-checked">
        <Text.span>Checked and disabled</Text.span>
      </Checkbox>
    </>
  );
};

export const Wrapped = Template.bind({});
Wrapped.args = {
  children: "Wrapped checkbox",
  wrapped: true,
  id: "checkbox-wrapped",
};

export const WithError = Template.bind({});
WithError.args = {
  children: "Checkbox with error",
  error: true,
  id: "checkbox-with-error",
};

export const Uncontrolled = (): React.ReactElement => {
  const [checked, setChecked] = useState("unchecked");
  const checkboxRef = useRef<HTMLButtonElement>(null);

  const getStateFromRef = () => {
    if (checkboxRef.current && checkboxRef.current.dataset.state) {
      setChecked(checkboxRef.current.dataset.state);
    }
  };

  return (
    <form>
      <Checkbox id="checkbox-uncontrolled" ref={checkboxRef}>
        <Text.span>Uncontrolled with ref</Text.span>
        <br />
        <Text.span>State: {checked}</Text.span>
        <br />
        <Button
          onClick={getStateFromRef}
          size="small"
          type="button"
          variant="primary"
        >
          Get state
        </Button>
      </Checkbox>
    </form>
  );
};

export const Controlled = (): React.ReactElement => {
  const [checked, setChecked] = useState<CheckedState>("indeterminate");

  return (
    <form>
      <Checkbox
        checked={checked}
        id="checkbox-controlled"
        onCheckedChange={(checkState) => setChecked(checkState)}
      >
        <Text.span>Controlled</Text.span>
        <br />
        <Text.span>State: {checked.toString()}</Text.span>
        <br />
        <Button
          onClick={() =>
            setChecked((prevIsChecked) =>
              prevIsChecked === "indeterminate" ? false : "indeterminate"
            )
          }
          size="small"
          type="button"
          variant="primary"
        >
          Toggle indeterminate
        </Button>
      </Checkbox>
    </form>
  );
};
