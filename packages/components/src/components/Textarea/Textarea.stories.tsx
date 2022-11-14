import type { ComponentMeta } from "@storybook/react";
import React from "react";
import { useUID } from "react-uid";
import { HelpText } from "../HelpText";
import { Label } from "../Label";
import { TextArea } from "./Textarea";

export default {
  component: TextArea,
  title: "Components/Textarea",
} as ComponentMeta<typeof TextArea>;

export const Default = (): JSX.Element => {
  const textAreaID = useUID();
  return (
    <>
      <Label htmlFor={textAreaID}>Textarea</Label>
      <TextArea id={textAreaID} name="textarea">
        Textarea content
      </TextArea>
    </>
  );
};

export const Placeholder = (): JSX.Element => {
  const textAreaID = useUID();
  return (
    <>
      <Label htmlFor={textAreaID}>Textarea</Label>
      <TextArea
        id={textAreaID}
        name="textarea"
        placeholder="Placeholder text..."
      />
    </>
  );
};

export const Required = (): JSX.Element => {
  const textAreaID = useUID();
  return (
    <>
      <Label htmlFor={textAreaID} required>
        Textarea
      </Label>
      <TextArea id={textAreaID} name="textarea-required" required>
        Textarea content
      </TextArea>
    </>
  );
};

export const ReadOnly = (): JSX.Element => {
  const textAreaID = useUID();
  return (
    <>
      <Label htmlFor={textAreaID}>Textarea</Label>
      <TextArea id={textAreaID} name="textarea-readonly" readOnly>
        Textarea content
      </TextArea>
    </>
  );
};

export const Disabled = (): JSX.Element => {
  const textAreaID = useUID();
  return (
    <>
      <Label htmlFor={textAreaID}>Textarea</Label>
      <TextArea disabled id={textAreaID} name="textarea-disabled">
        Textarea content
      </TextArea>
    </>
  );
};

export const Error = (): JSX.Element => {
  const textAreaID = useUID();
  const helpTextID = useUID();
  return (
    <>
      <Label htmlFor={textAreaID}>Textarea</Label>
      <TextArea
        aria-describedby={helpTextID}
        hasError
        id={textAreaID}
        name="textarea-error"
      >
        Textarea content
      </TextArea>
      <HelpText hasError id={helpTextID}>
        This is an error message.
      </HelpText>
    </>
  );
};
