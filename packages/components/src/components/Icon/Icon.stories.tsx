import * as HeroOutlineIcons from "@heroicons/react/24/outline";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";
import map from "lodash/map";
import keys from "lodash/keys";
import { Box } from "../../primitives/Box";
import { Paragraph } from "../../components/Paragraph";
import { Icon } from "./Icon";
import { LucideIcons } from "./LucideIcons";

export default {
  component: Icon,
  title: "Components/Icon",
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "AcademicCapIcon",
  title: "Academic Icon",
};

export const WithLucideIcons = Template.bind({});
WithLucideIcons.args = {
  icon: "palette",
  title: "Palette Icon",
  decorative: true,
};

const getIconNamesArray = () => {
  const iconsArray = [];
  for (const [key] of Object.entries(HeroOutlineIcons)) {
    if (key !== "default") {
      iconsArray.push(key);
    }
  }
  return iconsArray;
};

export const IconList: React.FC = () => {
  const heroIconNames = getIconNamesArray();
  const lucideIconNames = keys(LucideIcons);

  return (
    <Box.div
      display="grid"
      gap="space30"
      gridTemplateColumns="repeat(4, 1fr);"
      maxWidth="680px"
    >
      {map(
        [...heroIconNames, ...lucideIconNames],
        (value: keyof typeof HeroOutlineIcons) => {
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
              <Paragraph marginBottom="space0">{value}</Paragraph>
            </Box.div>
          );
        }
      )}
    </Box.div>
  );
};
