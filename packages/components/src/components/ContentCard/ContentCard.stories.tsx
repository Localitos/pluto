import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Box } from "../../primitives/Box";
import { ContentCard } from "./ContentCard";

export default {
  component: ContentCard,
  title: "Components/Content Card",
} as Meta;

type Story = StoryFn<typeof ContentCard>;

const Template = (args: React.ComponentProps<typeof ContentCard>) => {
  return <ContentCard {...args} />;
};

const href = "https://localyze.com";

const defaultProps = {
  title: "The card title",
  text: "Lorem ipsum dolor sit, consectetur. Aliquam ac a. Ligula at et, sodales vel purus.",
  date: "Mon, Sept 5 2022",
  tag: "🏠 Permanent Housing",
  imageSrc: "/images/beach-seal-rocks.jpg",
  imageAlt: "a beach",
};

export const Default: Story = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const WithButton: Story = Template.bind({});
WithButton.args = {
  ...defaultProps,
  interactiveElementType: "button",
  ctaText: "Go to Page",
  href,
};

export const WithAnchor: Story = Template.bind({});
WithAnchor.args = {
  ...defaultProps,
  ctaText: "This is an Anchor",
  interactiveElementType: "anchor",
  href,
};

export const ClickableCard: Story = Template.bind({});
ClickableCard.args = {
  ...defaultProps,
  interactiveElementType: "card",
  href,
};

export const WithTargetBlank: Story = Template.bind({});
WithTargetBlank.args = {
  ...defaultProps,
  interactiveElementType: "anchor",
  href,
  ctaText: "This is an Anchor",
  target: "_blank",
};

export const EmphasizedBackground: Story = Template.bind({});
EmphasizedBackground.args = {
  ...defaultProps,
  background: "emphasized",
};

export const ImageOnTop: Story = Template.bind({});
ImageOnTop.args = {
  ...defaultProps,
  imagePosition: "top",
};

export const WithIcon: Story = Template.bind({});
WithIcon.args = {
  ...defaultProps,
  iconUrl: "/images/house.png",
};

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
      <Box.li>
        <Template {...defaultProps} />
      </Box.li>
      <Box.li>
        <Template {...defaultProps} />
      </Box.li>
      <Box.li>
        <Template {...defaultProps} imageSrc={"/images/beach-porto-rico.jpg"} />
      </Box.li>
    </Box.ul>
  );
};
