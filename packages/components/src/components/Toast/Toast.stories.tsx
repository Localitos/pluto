import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import isChromatic from "chromatic/isChromatic";
import { Anchor } from "../Anchor";
import { Button } from "../Button";
import { Box } from "../../primitives/Box";
import { Toast } from "./Toast";
import { ToastViewport } from "./ToastViewport";
import { useToast } from "./useToast";
import type { ToastCtaProps } from "./types";
import { ToastProvider } from ".";
// fixes Cannot access 'ToastContainer' before initialization:
// eslint-disable-next-line import/order
import { ToastContainer } from "./ToastContainer";

export default {
  component: Toast,
  title: "Components/Toast",
  parameters: {
    docs: {
      storyDescription:
        "ToastProvider and ToastViewport should only be used once in an application. Both should be placed in the root of the application.",
    },
  },
} as Meta<typeof Toast>;

const Template: StoryFn<typeof Toast> = (args) => {
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
  cta: {
    content: <Anchor href="#">See link here.</Anchor>,
    altText: "See link here.",
  },
  children: "Card could not be charged.",
  variant: "error",
};
WithAnchor.parameters = {
  docs: {
    storyDescription: "Currently on Anchors are supported as a CTA.",
  },
};

export const MultiLineContent = Template.bind({});
MultiLineContent.args = {
  children:
    "Reports have been successfully sent to recipients! This should wrap to a second line.",
};

const SampleApp = (): JSX.Element => {
  const toast = useToast();

  const ctaAction: ToastCtaProps = {
    content: <Anchor href="#">See link here.</Anchor>,
    altText: "See link here.",
  };

  return (
    <Box.div display="flex" gap="space70">
      <Button
        onClick={() => toast("Toast message!", "success")}
        variant="primary"
      >
        Open Toast
      </Button>
      <Button
        onClick={() => toast("Toast message!", "error", "action-id", ctaAction)}
        variant="primary"
      >
        Open Toast with action
      </Button>
    </Box.div>
  );
};

export const WithToastContainer = (): JSX.Element => (
  <ToastContainer>
    <SampleApp />
  </ToastContainer>
);
