import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Table, THead, TBody, Tr, Th, Td } from "./index";

export default {
  component: Table,
  title: "Components/Table",
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = () => {
  return (
    <Table tableLayout="fixed">
      <THead>
        <Tr>
          <Th>Talent name</Th>
          <Th>Email</Th>
          <Th>Current state</Th>
          <Th>Case type</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>Dietrich Eldert</Td>
          <Td>dietr-ehler@arketmay.com</Td>
          <Td>Closed</Td>
          <Td>Full relocation</Td>
        </Tr>
      </TBody>
    </Table>
  );
};

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    storyDescription:
      "You can use the various table elements to make up your table without having to worry about the styling.",
  },
};
