import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Box } from "../../primitives/Box";
import { Button } from "../Button";
import { Badge } from "../Badge";
import { ContentCard, InteractiveElementType } from "./ContentCard";

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
  interactiveElementType: InteractiveElementType.Button,
  callToAction: "Go to Page",
  href,
};

export const WithAnchor: Story = Template.bind({});
WithAnchor.args = {
  ...defaultProps,
  callToAction: "This is an Anchor",
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
  callToAction: "This is an Anchor",
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

export const CustomCta: Story = Template.bind({});
CustomCta.args = {
  ...defaultProps,
  callToAction: (
    <Button fullWidth loading variant="primary">
      Custom CTA
    </Button>
  ),
  imagePosition: "top",
  interactiveElementType: InteractiveElementType.Custom,
};

export const WithTopLeftElement: Story = Template.bind({});
WithTopLeftElement.args = {
  ...defaultProps,
  imagePosition: "top",
  topLeftElement: (
    <Box.img aria-hidden h="auto" src="/images/house.png" w="100%" />
  ),
};

export const PortraitImage: Story = Template.bind({});
PortraitImage.args = {
  ...defaultProps,
  imageSrc: "/images/beach-porto-rico.jpg",
};

export const WithTopRightElement: Story = Template.bind({});
WithTopRightElement.args = {
  ...defaultProps,
  imagePosition: "top",
  topLeftElement: (
    <Box.img aria-hidden h="auto" src="/images/house.png" w="100%" />
  ),
  topRightElement: (
    <Box.div position="absolute" right={24} top={24}>
      <Badge icon="star">Preferred partner</Badge>
    </Box.div>
  ),
};

export const WithLowOpacity: Story = Template.bind({});
WithLowOpacity.args = {
  ...defaultProps,
  imagePosition: "top",
  topLeftElement: (
    <Box.img aria-hidden h="auto" src="/images/house.png" w="100%" />
  ),
  hasLowOpacity: true,
  topRightElement: (
    <Box.div position="absolute" right={24} top={24}>
      <Badge color="red">Disabled</Badge>
    </Box.div>
  ),
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
        <Template {...defaultProps} />
      </Box.li>
      <Box.li>
        <Template {...defaultProps} imageSrc={"/images/beach-porto-rico.jpg"} />
      </Box.li>
    </Box.ul>
  );
};
