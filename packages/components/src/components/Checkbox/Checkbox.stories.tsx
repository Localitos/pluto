import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState, useRef } from "react";
import { CheckboxRoot, CheckedState } from "./Checkbox";

export default {
  component: CheckboxRoot,
  title: "Components/Checkbox",
} as ComponentMeta<typeof CheckboxRoot>;

const Template: ComponentStory<typeof CheckboxRoot> = (args) => (
  <form>
    <CheckboxRoot {...args} />
  </form>
);

export const Default = Template.bind({});
Default.args = {
  children: "Checkbox",
  checkboxId: "checkbox-1",
  disabled: true,
};

export const Wrapped = Template.bind({});
Wrapped.args = {
  children: "Wrapped checkbox",
  wrapped: true,
  checkboxId: "checkbox-2",
};

export const WithError = Template.bind({});
WithError.args = {
  children: "Checkbox with error",
  error: true,
  checkboxId: "checkbox-3",
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
      <CheckboxRoot checkboxId="checkbox-4" ref={checkboxRef}>
        <span>Uncontrolled with ref</span>
        <br />
        <span>State: {checked}</span>
        <br />
        <button onClick={getStateFromRef} type="button">
          Get state
        </button>
      </CheckboxRoot>
    </form>
  );
};

export const Controlled = (): React.ReactElement => {
  const [checked, setChecked] = React.useState<CheckedState>("indeterminate");

  return (
    <form>
      <CheckboxRoot
        checkboxId="checkbox-5"
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
      </CheckboxRoot>
    </form>
  );
};
