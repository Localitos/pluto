import type { Meta, StoryFn } from "@storybook/react";

import React from "react";
import map from "lodash/map";
import keys from "lodash/keys";
import { Box } from "../../primitives/Box";
import { Paragraph } from "../../components/Paragraph";
import { Icon } from "./Icon";
import { LucideIcons } from "./LucideIcons";
import { LucideIconName } from "./types/LucideIconName";

export default {
  component: Icon,
  title: "Components/Icon",
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "paperclip",
  title: "PaperClip Icon",
};

export const WithLucideIcons = Template.bind({});
WithLucideIcons.args = {
  icon: "palette",
  title: "Palette Icon",
  decorative: true,
};

const getIconNamesArray = () => {
  return keys(LucideIcons);
};

export const IconList: React.FC = () => {
  const iconNames = getIconNamesArray();

  return (
    <Box.div
      display="grid"
      gap="space30"
      gridTemplateColumns="repeat(4, 1fr);"
      maxWidth="680px"
    >
      {map(iconNames, (value: LucideIconName) => {
        return (
          <Box.div
            borderColor="colorBorder"
            borderStyle="borderStyleSolid"
            borderWidth="borderWidth10"
            key={value}
            padding="space60"
            textAlign="center"
          >
            <Icon
              color="colorIconStrong"
              decorative
              icon={value}
              size="sizeIcon40"
            />
            <Paragraph marginBottom="m0">{value}</Paragraph>
          </Box.div>
        );
      })}
    </Box.div>
  );
};
