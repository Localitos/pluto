import type { Meta } from "@storybook/react";
import React, { ReactElement } from "react";
import { Anchor } from "../Anchor/Anchor";
import { Box } from "../../primitives/Box";
import { UnorderedList } from "./UnorderedList";
import { ListItem } from "./ListItem";

export default {
  component: UnorderedList,
  title: "Components/List",
} as Meta<typeof UnorderedList>;

export const Unordered = (): ReactElement => (
  <UnorderedList>
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
      <UnorderedList>
        <ListItem>A nested item</ListItem>
      </UnorderedList>
    </ListItem>
  </UnorderedList>
);

export const AnchorList = (): ReactElement => (
  <Box.div color="colorTextLink">
    <UnorderedList>
      <ListItem>
        <Anchor href="https://www.localyze.com">Localyze</Anchor>
      </ListItem>
      <ListItem>
        <Anchor href="https://app.localyze.com">Localyze App</Anchor>
      </ListItem>
    </UnorderedList>
  </Box.div>
);
