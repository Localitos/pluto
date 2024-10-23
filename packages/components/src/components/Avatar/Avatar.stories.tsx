import type { Meta, StoryFn } from "@storybook/react";
import map from "lodash/map";
import dropRight from "lodash/dropRight";
import React from "react";
import { Box } from "../../primitives/Box";
import { Avatar, AvatarSizeOptions } from "./Avatar";
import { getAvatarColor } from "./getAvatarColor";
import type { AvatarColorOptions } from "./Avatar";

export default {
  component: Avatar,
  title: "Components/Avatar",
} as Meta<typeof Avatar>;

const sizes: AvatarSizeOptions[] = [
  "xsmall",
  "small",
  "medium",
  "large",
  "xlarge",
];

const Template: StoryFn<typeof Avatar> = (args) => (
  <Box.div alignItems="center" display="flex" gap="d2" maxWidth="680px">
    {map(sizes, (size: AvatarSizeOptions) => {
      return (
        <Box.div padding="d5">
          <Avatar size={size} {...args} />
        </Box.div>
      );
    })}
  </Box.div>
);

const defaultArgs = {
  src: "/images/profile.jpg",
  name: "Lisa Wang",
};

export const Image = Template.bind({});
Image.args = defaultArgs;

export const Initials = Template.bind({});
Initials.args = {
  name: "Liza Wang",
};

export const WithName = (): JSX.Element => (
  <Box.div alignItems="center" display="flex" gap="d2" maxWidth="680px">
    {map(dropRight(sizes), (size: AvatarSizeOptions) => {
      return (
        <Box.div padding="d5">
          <Avatar size={size} {...defaultArgs} showName />
        </Box.div>
      );
    })}
  </Box.div>
);

export const WithBorder = (): JSX.Element => (
  <Box.div alignItems="center" display="flex" gap="d2" maxWidth="680px">
    {map(sizes, (size: AvatarSizeOptions) => {
      return (
        <Box.div padding="d5">
          <Avatar size={size} {...defaultArgs} border />
        </Box.div>
      );
    })}
  </Box.div>
);

export const InitialsAndBackgroundColors: StoryFn<typeof Avatar> = () => {
  return (
    <Box.div display="flex" flexDirection="column" gap="d3">
      <Box.div display="flex" flexDirection="row" gap="d3">
        <Avatar color="blue" name="Olivia Long" showName size="xsmall" />
        <Avatar color="blue" name="Olivia Joseph" showName size="small" />
        <Avatar color="blue" name="Jean Knight" showName size="medium" />
        <Avatar color="blue" name="Betty Long" showName size="large" />
      </Box.div>
      <Box.div display="flex" flexDirection="row" gap="d3">
        <Avatar color="green" name="Olivia Long" showName size="xsmall" />
        <Avatar color="green" name="Olivia Joseph" showName size="small" />
        <Avatar color="green" name="Jean Knight" showName size="medium" />
        <Avatar color="green" name="Betty Long" showName size="large" />
      </Box.div>
      <Box.div display="flex" flexDirection="row" gap="d3">
        <Avatar color="light blue" name="Olivia Long" showName size="xsmall" />
        <Avatar color="light blue" name="Olivia Joseph" showName size="small" />
        <Avatar color="light blue" name="Jean Knight" showName size="medium" />
        <Avatar color="light blue" name="Betty Long" showName size="large" />
      </Box.div>
      <Box.div display="flex" flexDirection="row" gap="d3">
        <Avatar color="orange" name="Olivia Long" showName size="xsmall" />
        <Avatar color="orange" name="Olivia Joseph" showName size="small" />
        <Avatar color="orange" name="Jean Knight" showName size="medium" />
        <Avatar color="orange" name="Betty Long" showName size="large" />
      </Box.div>
      <Box.div display="flex" flexDirection="row" gap="d3">
        <Avatar color="pink" name="Olivia Long" showName size="xsmall" />
        <Avatar color="pink" name="Olivia Joseph" showName size="small" />
        <Avatar color="pink" name="Jean Knight" showName size="medium" />
        <Avatar color="pink" name="Betty Long" showName size="large" />
      </Box.div>
      <Box.div display="flex" flexDirection="row" gap="d3">
        <Avatar color="yellow" name="Olivia Long" showName size="xsmall" />
        <Avatar color="yellow" name="Olivia Joseph" showName size="small" />
        <Avatar color="yellow" name="Jean Knight" showName size="medium" />
        <Avatar color="yellow" name="Betty Long" showName size="large" />
      </Box.div>
    </Box.div>
  );
};

export const InitialsAndRandomBackgroundColor: StoryFn<typeof Avatar> = () => {
  return (
    <Box.div display="flex" flexDirection="row" gap="d3">
      <Avatar
        color={getAvatarColor("Olivia Long") as AvatarColorOptions}
        name="Olivia Long"
        showName
        size="xsmall"
      />
      <Avatar
        color={getAvatarColor("Olivia Joseph") as AvatarColorOptions}
        name="Olivia Joseph"
        showName
        size="small"
      />
      <Avatar
        color={getAvatarColor("Jean Knight") as AvatarColorOptions}
        name="Jean Knight"
        showName
        size="medium"
      />
      <Avatar
        color={getAvatarColor("Betty Long") as AvatarColorOptions}
        name="Betty Long"
        showName
        size="large"
      />
    </Box.div>
  );
};
