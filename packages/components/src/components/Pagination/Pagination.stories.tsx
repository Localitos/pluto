import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Box } from "../../primitives/Box";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const BasicPagination = (): React.JSX.Element => {
  const [currentPage, setCurrentPage] = React.useState(5);
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      pageCount={7}
    />
  );
};

export const Default: Story = {
  render: (): React.JSX.Element => <BasicPagination />,
};

Default.parameters = {
  docs: {
    storyDescription:
      "Pagination lets users navigate through content or a dataset that’s been broken up into multiple pages.",
  },
};

const PaginationWithLotsOfPages = (): React.JSX.Element => {
  const [currentPage, setCurrentPage] = React.useState(333);
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      pageCount={999}
    />
  );
};

export const WithLotsOfPages: Story = {
  render: (): React.JSX.Element => <PaginationWithLotsOfPages />,
};

const PaginationWithMorePageNeighbors = (): React.JSX.Element => {
  const [currentPage, setCurrentPage] = React.useState(333);
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      pageCount={999}
      pageNeighbors={3}
    />
  );
};

export const WithMorePageNeighbors: Story = {
  render: (): React.JSX.Element => <PaginationWithMorePageNeighbors />,
};

export const WithContainerBackground: Story = {
  render: (): React.JSX.Element => (
    <Box.div backgroundColor="colorBackgroundWeaker" padding="d3">
      <PaginationWithLotsOfPages />
    </Box.div>
  ),
};
