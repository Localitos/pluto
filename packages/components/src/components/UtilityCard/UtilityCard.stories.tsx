import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Box } from "../../primitives/Box";
import { UtilityCard } from "./UtilityCard";

export default {
  component: UtilityCard,
  title: "Components/Utility Card",
} as Meta;

type Story = StoryFn<typeof UtilityCard>;

const Template = (args: React.ComponentProps<typeof UtilityCard>) => {
  return <UtilityCard {...args} />;
};

const href = "https://localyze.com";

const defaultProps = {
  imageAlt: "a beach",
  imageSrc: "/images/beach-seal-rocks.jpg",
  title: "The card title",
  categoryTag: "The category tag",
  status: "In progress",
};

export const Default: Story = Template.bind({});
Default.args = {
  ...defaultProps,
};

/*export const WithButton: Story = Template.bind({});
WithButton.args = {
  ...defaultProps,
  interactiveElementType: InteractiveElementType.Button,
  ctaText: "Go to Page",
  href,
};

export const WithAnchor: Story = Template.bind({});
WithAnchor.args = {
  ...defaultProps,
  ctaText: "This is an Anchor",
  interactiveElementType: InteractiveElementType.Anchor,
  href,
};

export const ClickableCard: Story = Template.bind({});
ClickableCard.args = {
  ...defaultProps,
  interactiveElementType: InteractiveElementType.Card,
  href,
};

export const WithTargetBlank: Story = Template.bind({});
WithTargetBlank.args = {
  ...defaultProps,
  interactiveElementType: InteractiveElementType.Anchor,
  href,
  ctaText: "This is an Anchor",
  target: "_blank",
};

export const EmphasizedBackground: Story = Template.bind({});
EmphasizedBackground.args = {
  ...defaultProps,
  background: "emphasized",
}; */

export const PortraitImage: Story = Template.bind({});
PortraitImage.args = {
  ...defaultProps,
  imageSrc: "/images/beach-porto-rico.jpg",
};

export const InList = (): JSX.Element => {
  return (
    <Box.ul
      display="grid"
      gap="space50"
      gridTemplateColumns={{ _: "1fr", lg: "1fr 1fr" }}
      listStyleType="none"
    >
      <p>cenas</p>
      {/*
      <Box.li>
        
        <Template {...defaultProps} />
      </Box.li>
      <Box.li>
        <Template {...defaultProps} />
      </Box.li>
      <Box.li>
        <Template {...defaultProps} imageSrc={"/images/beach-porto-rico.jpg"} />
      </Box.li>*/}
    </Box.ul>
  );
};
