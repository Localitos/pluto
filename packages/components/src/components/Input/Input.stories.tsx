import type { ComponentMeta } from "@storybook/react";
import React from "react";
import { useUID } from "react-uid";
import { HelpText } from "../HelpText";
import { Label } from "../Label";
import { Input } from "./Input";

export default {
  component: Input,
  title: "Components/Input",
} as ComponentMeta<typeof Input>;

export const Default: React.FC = () => {
  const inputID = useUID();
  const helpTextID = useUID();
  return (
    <>
      <Label htmlFor={inputID}>Text Input</Label>
      <Input id={inputID} name="input" type="text" value="Text input" />
      <HelpText id={helpTextID}>Please enter some text.</HelpText>
    </>
  );
};

export const Large: React.FC = () => {
  const inputID = useUID();
  return (
    <>
      <Label htmlFor={inputID}>Text Input</Label>
      <Input
        id={inputID}
        name="input"
        size="large"
        type="text"
        value="Text input"
      />
    </>
  );
};

export const Placeholder: React.FC = () => {
  const inputID = useUID();
  return (
    <>
      <Label htmlFor={inputID}>Text Input</Label>
      <Input
        id={inputID}
        name="input"
        placeholder="Placeholder text..."
        type="text"
      />
    </>
  );
};

export const Required: React.FC = () => {
  const inputID = useUID();
  return (
    <>
      <Label htmlFor={inputID} required>
        Text Input
      </Label>
      <Input
        id={inputID}
        name="input-required"
        required
        type="text"
        value="Required text"
      />
    </>
  );
};

export const ReadOnly: React.FC = () => {
  const inputID = useUID();
  return (
    <>
      <Label htmlFor={inputID}>Text Input</Label>
      <Input
        id={inputID}
        name="input-readonly"
        readOnly
        type="text"
        value="Read only text"
      />
    </>
  );
};

export const Disabled: React.FC = () => {
  const inputID = useUID();
  return (
    <>
      <Label htmlFor={inputID}>Text Input</Label>
      <Input
        disabled
        id={inputID}
        name="input-disabled"
        type="text"
        value="Disabled text"
      />
    </>
  );
};

export const Error: React.FC = () => {
  const inputID = useUID();
  const helpTextID = useUID();
  return (
    <>
      <Label htmlFor={inputID}>Text Input</Label>
      <Input
        aria-describedby={helpTextID}
        hasError
        id={inputID}
        name="input-error"
        type="text"
        value="Error text"
      />
      <HelpText hasError id={helpTextID}>
        This is an error message.
      </HelpText>
    </>
  );
};

export const Hidden: React.FC = () => {
  const inputID = useUID();
  return (
    <Input id={inputID} name="input-hidden" type="hidden" value="Hidden text" />
  );
};

export const Number: React.FC = () => {
  const inputID = useUID();
  return (
    <>
      <Label htmlFor={inputID}>Text Input</Label>
      <Input id={inputID} name="input-number" type="number" value="500" />
    </>
  );
};

export const NumberError: React.FC = () => {
  const inputID = useUID();
  const helpTextID = useUID();
  return (
    <>
      <Label htmlFor={inputID}>Text Input</Label>
      <Input
        hasError
        id={inputID}
        name="input-number-error"
        type="number"
        value="Error on number input"
      />
      <HelpText hasError id={helpTextID}>
        Number type inputs should only contain numbers.
      </HelpText>
    </>
  );
};
