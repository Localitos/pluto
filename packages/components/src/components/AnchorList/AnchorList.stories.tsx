import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Anchor } from "../Anchor/Anchor";
import { AnchorList } from "./AnchorList";

export default {
  component: AnchorList,
  title: "Components/AnchorList",
} as ComponentMeta<typeof AnchorList>;

const Template: ComponentStory<typeof AnchorList> = ({ children }) => (
  <div>{children}</div>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <AnchorList>
      <Anchor href="https://www.localyze.com">Localyze</Anchor>
      <Anchor href="https://app.localyze.com">Localyze App</Anchor>
    </AnchorList>
  ),
};
