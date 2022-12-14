import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import isChromatic from "chromatic/isChromatic";
import { Button } from "../Button";
import { Toast } from "./Toast";
import { ToastViewport } from "./ToastViewport";
import { ToastProvider } from ".";

export default {
  component: Toast,
  title: "Components/Toast",
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => {
  const [open, setOpen] = React.useState(isChromatic() ? true : false);

  return (
    <ToastProvider duration={5000}>
      <Button onClick={() => setOpen(true)} variant="primary">
        Open toast
      </Button>
      <Toast onOpenChange={setOpen} open={open} {...args} />
      <ToastViewport />
    </ToastProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: "Reports have been successfully sent to recipients!",
};

export const Error = Template.bind({});
Error.args = {
  children: "Card could not be charged. Please try again.",
  variant: "error",
};

export const WithAnchor = Template.bind({});
WithAnchor.args = {
  anchorHref: "#",
  anchorText: "See link here",
  children: "Card could not be charged.",
  variant: "error",
};

export const MultiLineContent = Template.bind({});
MultiLineContent.args = {
  children:
    "Reports have been successfully sent to recipients! This should wrap to a second line.",
};
