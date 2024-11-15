import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Box } from "../../primitives/Box";
import { Badge } from "../Badge";
import { Paragraph } from "../Paragraph";
import { UtilityCard } from "./UtilityCard";

export default {
  component: UtilityCard,
  title: "Components/Utility Card",
} as Meta;

type Story = StoryFn<typeof UtilityCard>;

const Template = (args: React.ComponentProps<typeof UtilityCard>) => {
  return <UtilityCard {...args} />;
};

const onClick = (): void =>
  alert("This is what happens when you click on the card");

const defaultProps: React.ComponentProps<typeof UtilityCard> = {
  emoji: "🧳️",
  title: "My Service",
  subTitle: "Housing",
};

export const Default: Story = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const WithLargeEmojiWrapper: Story = Template.bind({});
WithLargeEmojiWrapper.args = {
  ...defaultProps,
  emoji: "🏠️",
  emojiWrapperSize: "large",
  content: (
    <Paragraph marginBottom="d0">
      Step-by-step guide, document lists & articles and support via chat and
      phone, incl.
    </Paragraph>
  ),
};

export const WithContent: Story = Template.bind({});
WithContent.args = {
  ...defaultProps,
  content: (
    <Paragraph marginBottom="d0">
      This is the content of the card. It can be a paragraph, a list, or any
      other component.
    </Paragraph>
  ),
};

export const WithIndicator: Story = Template.bind({});
WithIndicator.args = {
  ...defaultProps,
  emojiWrapperSize: "large",
  indicator: (
    <Badge color="green" icon="circle-check">
      Included in your support
    </Badge>
  ),
  content: (
    <Paragraph marginBottom="d0" size="small">
      When using My Service, you get access to a lot of cool features and be
      able to do a lot of cool things.
    </Paragraph>
  ),
};

export const WithBadge: Story = Template.bind({});
WithBadge.args = {
  ...defaultProps,
  content: (
    <Box.div marginTop="d3">
      <Badge>In progress</Badge>
    </Box.div>
  ),
};

export const Clickable: Story = Template.bind({});
Clickable.args = {
  ...defaultProps,
  clickable: true,
  onClick,
};

export const Hoverable: Story = Template.bind({});
Hoverable.args = {
  ...defaultProps,
  hoverable: true,
};

export const InList = (): JSX.Element => {
  return (
    <Box.ul
      display="grid"
      gap="d4"
      gridTemplateColumns={{ _: "1fr", lg: "1fr 1fr" }}
      listStyleType="none"
    >
      <Box.li>
        <Template {...defaultProps} />
      </Box.li>
      <Box.li>
        <Template {...defaultProps} emoji="👨‍👩‍👦" title="Another service" />
      </Box.li>
      <Box.li>
        <Template {...defaultProps} emoji="🙈" title="One more service" />
      </Box.li>
    </Box.ul>
  );
};
