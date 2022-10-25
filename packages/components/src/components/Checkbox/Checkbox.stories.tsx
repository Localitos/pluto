import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState, useRef } from "react";
import {
  Root,
  CheckIndicator,
  IndeterminateIndicator,
  CheckedState,
} from "./Checkbox";

export default {
  component: Root,
  title: "Components/Checkbox",
} as ComponentMeta<typeof Root>;

const Template: ComponentStory<typeof Root> = (args) => (
  <form>
    <Root {...args} />
  </form>
);

export const Default = Template.bind({});
Default.args = {
  children: "Checkbox",
};

export const Wrapped = Template.bind({});
Wrapped.args = {
  children: "Wrapped checkbox",
  wrapped: true,
};

export const WithError = Template.bind({});
WithError.args = {
  children: "Checkbox with error",
  error: true,
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
      <Root ref={checkboxRef}>
        <span>Uncontrolled with ref</span>
        <br />
        <span>State: {checked}</span>
        <br />
        <button onClick={getStateFromRef} type="button">
          Get state
        </button>
      </Root>
    </form>
  );
};

export const Controlled = (): React.ReactElement => {
  const [checked, setChecked] = React.useState<CheckedState>("indeterminate");

  const getIcon = () => {
    if (checked === "indeterminate") return IndeterminateIndicator;
    return CheckIndicator;
  };

  return (
    <form>
      <Root
        Icon={getIcon()}
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
      </Root>
    </form>
  );
};
