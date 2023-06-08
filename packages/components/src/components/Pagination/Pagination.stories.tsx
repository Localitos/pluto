import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const BasicPagination = (): JSX.Element => {
  const [currentPage, setCurrentPage] = React.useState(5);
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={20}
    />
  );
};

export const Default: Story = {
  render: (): JSX.Element => <BasicPagination />,
};

Default.parameters = {
  docs: {
    storyDescription:
      "Pagination lets users navigate through content or a dataset that’s been broken up into multiple pages.",
  },
};

const PaginationWithLotsOfPages = (): JSX.Element => {
  const [currentPage, setCurrentPage] = React.useState(333);
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={999}
    />
  );
};

export const WithLotsOfPages: Story = {
  render: (): JSX.Element => <PaginationWithLotsOfPages />,
};

const PaginationWithMorePageNeighbors = (): JSX.Element => {
  const [currentPage, setCurrentPage] = React.useState(333);
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      pageNeighbors={3}
      totalPages={999}
    />
  );
};

export const WithMorePageNeighbors: Story = {
  render: (): JSX.Element => <PaginationWithMorePageNeighbors />,
};
