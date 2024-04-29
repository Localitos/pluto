import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Box } from "../../primitives/Box";
import { UtilityCard, InteractiveElementTypeUtilityCard } from "./UtilityCard";

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

const defaultProps = {
  imageAlt: "a beach",
  imageSrc: "/images/beach-seal-rocks.jpg",
  title: "The card title",
  categoryTag: "The category tag",
  serviceTag: "Concierge Services",
};

export const Default: Story = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const CardWithBadge: Story = Template.bind({});
CardWithBadge.args = {
  ...defaultProps,
  status: "In progress",
};

export const ClickableCard: Story = Template.bind({});
ClickableCard.args = {
  ...defaultProps,
  interactiveElementType: InteractiveElementTypeUtilityCard.Card,
  onClick,
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
