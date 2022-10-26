import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState, useRef } from "react";
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
  checkboxId: "checkbox-default",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Checkbox",
  checkboxId: "checkbox-disabled",
  disabled: true,
};

export const DisabledAndChecked = (): React.ReactElement => {
  return (
    <>
      <Checkbox
        checkboxId="checkbox-disabled-and-checked"
        checked={true}
        disabled
      >
        <span>Disabled and checked</span>
      </Checkbox>
    </>
  );
};

export const Wrapped = Template.bind({});
Wrapped.args = {
  children: "Wrapped checkbox",
  wrapped: true,
  checkboxId: "checkbox-wrapped",
};

export const WithError = Template.bind({});
WithError.args = {
  children: "Checkbox with error",
  error: true,
  checkboxId: "checkbox-with-error",
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
      <Checkbox checkboxId="checkbox-uncontrolled" ref={checkboxRef}>
        <span>Uncontrolled with ref</span>
        <br />
        <span>State: {checked}</span>
        <br />
        <button onClick={getStateFromRef} type="button">
          Get state
        </button>
      </Checkbox>
    </form>
  );
};

export const Controlled = (): React.ReactElement => {
  const [checked, setChecked] = React.useState<CheckedState>("indeterminate");

  return (
    <form>
      <Checkbox
        checkboxId="checkbox-controlled"
        checked={checked}
        onCheckedChange={(checkState) => setChecked(checkState)}
      >
        <span>Controlled</span>
        <br />
        <span>State: {checked.toString()}</span>
        <br />
        <button
          onClick={() =>
            setChecked((prevIsChecked) =>
              prevIsChecked === "indeterminate" ? false : "indeterminate"
            )
          }
          type="button"
        >
          Toggle indeterminate
        </button>
      </Checkbox>
    </form>
  );
};
