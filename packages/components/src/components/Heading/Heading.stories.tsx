import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Box } from "../../primitives/Box";
import { Heading } from "./Heading";

export default {
  component: Heading,
  title: "Components/Heading",
} as Meta<typeof Heading>;

const Template: StoryFn<typeof Heading> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "I'm a heading.",
};

export const Heading10 = Template.bind({});
Heading10.args = {
  children: "I'm a h2 element with heading10 styles.",
  size: "heading10",
};

export const Heading20 = Template.bind({});
Heading20.args = {
  children: "I'm a h2 element with Heading20 styles.",
  size: "heading20",
};

export const Heading30 = Template.bind({});
Heading30.args = {
  children: "I'm a h2 element with Heading30 styles.",
  size: "heading30",
};

export const Heading40 = Template.bind({});
Heading40.args = {
  children: "I'm a h2 element with Heading40 styles.",
  size: "heading40",
};

export const Heading50 = Template.bind({});
Heading50.args = {
  children: "I'm a h2 element with Heading50 styles.",
  size: "heading50",
};

export const Heading60 = Template.bind({});
Heading60.args = {
  children: "I'm a h2 element with Heading60 styles.",
  size: "heading60",
};

export const WithBreakpoints = Template.bind({});
WithBreakpoints.args = {
  children: "I'm a h2 element rendered with different sizes.",
  marginBottom: "m0",
  size: { _: "heading60", md: "heading10" },
};

WithBreakpoints.parameters = {
  chromatic: { viewports: [320, 1200] },
};

export const NoMargin = Template.bind({});
NoMargin.args = {
  children: "I'm a h2 element with no bottom margin.",
  marginBottom: "m0",
};

export const WithColorTextInverse = (): React.ReactElement => (
  <Box.div backgroundColor="colorBackgroundPrimaryStrong" padding="space30">
    <Heading color="colorTextInverse">
      I&apos;m a h2 element in color white.
    </Heading>
  </Box.div>
);
