// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";
import map from "lodash/map";
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

export const StickyHeaders = (): JSX.Element => {
  return (
    <Table>
      <THead stickyHeader>
        <Tr>
          <Th>Column 1</Th>
          <Th>Column 2</Th>
          <Th>Column 3</Th>
        </Tr>
        <Tr>
          <Th>Column 1</Th>
          <Th>Column 2</Th>
          <Th>Column 3</Th>
        </Tr>
      </THead>
      <TBody>
        {map([...Array.from({ length: 100 }).keys()], (index) => (
          <Tr key={index}>
            <Td>Content</Td>
            <Td>Content</Td>
            <Td>Content</Td>
          </Tr>
        ))}
      </TBody>
    </Table>
  );
};

StickyHeaders.story = {
  name: "Sticky headers",
};

export const ReactTable = (): JSX.Element => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  type Talent = {
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    status: string;
  };

  const defaultData: Talent[] = [
    {
      firstName: "Dietrich",
      lastName: "Eldert",
      age: 24,
      visits: 100,
      status: "Open case",
    },
    {
      firstName: "Damara",
      lastName: "Halsey",
      age: 40,
      visits: 40,
      status: "Open case",
    },
    {
      firstName: "Hogan",
      lastName: "Waltman",
      age: 45,
      visits: 20,
      status: "Closed case",
    },
  ];

  const columnHelper = createColumnHelper<Talent>();

  const columns = [
    columnHelper.accessor("firstName", {
      cell: (info) => info.getValue(),
      header: "First Name",
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: "lastName",
      cell: (info) => info.getValue(),
      header: "Last Name",
    }),
    columnHelper.accessor("age", {
      cell: (info) => info.renderValue(),
      header: "Age",
    }),
    columnHelper.accessor("visits", {
      header: "Visits",
    }),
    columnHelper.accessor("status", {
      header: "Status",
    }),
  ];

  const [data] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Table>
      <THead>
        {map(table.getHeaderGroups(), (headerGroup) => (
          <Tr key={headerGroup.id}>
            {map(headerGroup.headers, (header) => (
              <Th key={header.id}>
                <div
                  {...{
                    onClick: header.column.getToggleSortingHandler(),
                  }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted() as string] ?? null}
                </div>
              </Th>
            ))}
          </Tr>
        ))}
      </THead>
      <TBody>
        {map(table.getRowModel().rows, (row) => (
          <Tr key={row.id}>
            {map(row.getVisibleCells(), (cell) => (
              <Td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Td>
            ))}
          </Tr>
        ))}
      </TBody>
    </Table>
  );
};
ReactTable.parameters = {
  docs: {
    storyDescription:
      "The table elements can be used with a headless table libray like Tanstack Table, formerly React Table. This allows you to build a datagrid on with the Pluto table elements.",
  },
};
