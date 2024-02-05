import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Box } from "../../primitives/Box";
import { Button } from "../Button";
import { ContentCard } from "./ContentCard";

export default {
  component: ContentCard,
  title: "Components/Content Card",
} as Meta<typeof ContentCard>;

const Template: StoryFn<typeof ContentCard> = (args) => (
  <ContentCard {...args} />
);

const linkHref = "https://localyze.com";

const defaultProps = {
  title: "The card title",
  text: "Lorem ipsum dolor sit, consectetur. Aliquam ac a. Ligula at et, sodales vel purus.",
  date: "Mon, Sept 5 2022",
  tag: "🏠 Permanent Housing",
  imageSrc: "/images/beach-seal-rocks.jpg",
  imageAlt: "a beach",
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
  linkText: "This is a link",
  linkHref,
};

export const WithButton = Template.bind({});
WithButton.args = {
  ...defaultProps,
  children: (
    <Button
      as="a"
      fullWidth
      href={linkHref}
      rel="noopener noreferrer"
      target="_blank"
      variant="secondary"
    >
      Go to Page
    </Button>
  ),
};

export const Interactive = Template.bind({});
Interactive.args = {
  ...defaultProps,
  href: linkHref,
};

export const ImageOnTop = Template.bind({});
ImageOnTop.args = {
  ...defaultProps,
  href: linkHref,
  imagePosition: "top",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...defaultProps,
  href: linkHref,
  iconUrl: "/images/house.png",
};

export const PortraitImage = Template.bind({});
PortraitImage.args = {
  ...defaultProps,
  imageSrc: "/images/beach-porto-rico.jpg",
};

export const InList = (): JSX.Element => {
  return (
    <Box.ul
      display="grid"
      gap={"space50"}
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
