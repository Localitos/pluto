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
  id: "checkbox-default",
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
        <span>Disabled and checked</span>
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
        checked={checked}
        id="checkbox-controlled"
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
