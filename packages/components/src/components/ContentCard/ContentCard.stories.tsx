import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
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
  buttonText: "Go to Page",
  imageSrc: "/images/profile.jpg",
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
  linkText: "This is a link",
  linkHref,
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
  buttonText: "Go to Page",
  imagePosition: "top",
};
