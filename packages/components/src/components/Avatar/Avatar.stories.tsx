import type { ComponentMeta, ComponentStory } from "@storybook/react";
import map from "lodash/map";
import React from "react";
import { Box } from "../../primitives/Box";
import { Avatar, AvatarSizeOptions } from "./Avatar";

export default {
  component: Avatar,
  title: "Components/Avatar",
} as ComponentMeta<typeof Avatar>;

const sizes: AvatarSizeOptions[] = ["xsmall", "small", "medium", "large"];

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Box.div alignItems="center" display="flex" gap="space30" maxWidth="680px">
    {map(sizes, (size: AvatarSizeOptions) => {
      return (
        <Box.div padding="space60">
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

export const WithName = Template.bind({});
WithName.args = {
  ...defaultArgs,
  showName: true,
};
