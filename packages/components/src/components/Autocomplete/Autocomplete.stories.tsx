import type { Meta } from "@storybook/react";
import React, { ReactElement } from "react";
import { Box } from "../../primitives/Box";
import { Autocomplete } from "./Autocomplete";

export default {
  component: Autocomplete,
  title: "Components/Autocomplete",
} as Meta<typeof Autocomplete>;

export const Default = (): ReactElement => (
  <Box.div h="300px">
    <Autocomplete />
  </Box.div>
);
