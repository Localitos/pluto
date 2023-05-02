import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Pagination } from "./Pagination";

export default {
  component: Pagination,
  title: "Components/Pagination",
} as ComponentMeta<typeof Pagination>;

export const Default = (): JSX.Element => {
  const [currentPage, setCurrentPage] = React.useState(10);
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={20}
    />
  );
};

// export const WithMorePages = (): JSX.Element => {
//   const [currentPage, setCurrentPage] = React.useState(1);
//   return (
//     <Pagination
//       currentPage={currentPage}
//       onPageChange={setCurrentPage}
//       totalPages={700}
//     />
//   );
// };

