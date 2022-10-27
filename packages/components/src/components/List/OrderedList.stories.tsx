import type { ComponentMeta } from "@storybook/react";
import React, { ReactElement } from "react";
import { Anchor } from "../Anchor/Anchor";
import { OrderedList } from "./OrderedList";
import { ListItem } from "./ListItem";

export default {
  component: OrderedList,
  title: "Components/List",
} as ComponentMeta<typeof OrderedList>;

export const Ordered = (): ReactElement => (
  <OrderedList>
    <ListItem>This is a list item</ListItem>
    <ListItem>
      This is another list item with a <Anchor>link</Anchor>
    </ListItem>
    <ListItem>
      This is multiline list item. <br />
      The bullet should remain on the first line.
    </ListItem>
    <ListItem>
      A parent item
      <OrderedList>
        <ListItem>A nested item</ListItem>
      </OrderedList>
    </ListItem>
  </OrderedList>
);
