import { within, userEvent } from "@storybook/testing-library";
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { Meta, StoryObj } from "@storybook/react";
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
import { Box } from "../../primitives/Box";
import { Table, THead, TBody, Tr, Th, ThButton, Td } from "./index";

const table: Meta<typeof Table> = {
  title: "Components/Table",
  args: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Table has a required prop which confuses Storybook here.
    subcomponents: { Table, THead, TBody, Tr, Th, ThButton, Td },
    component: Table,
  },
};

export default table;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
      <THead>
        <Tr>
          <Th>Talent name</Th>
          <Th>Email</Th>
          <Th textAlign="center">Current state</Th>
          <Th textAlign="right">Case type</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>Captain Picard</Td>
          <Td>c.picard@enterprise.org</Td>
          <Td textAlign="center">Open</Td>
          <Td textAlign="right">Full relocation</Td>
        </Tr>
        <Tr>
          <Td>Ford Prefect</Td>
          <Td>f.prefect@hhgttg.com</Td>
          <Td textAlign="center">Closed</Td>
          <Td textAlign="right">Part relocation</Td>
        </Tr>
        <Tr>
          <Td>Dietrich Eldert</Td>
          <Td>dietr-ehler@arketmay.com</Td>
          <Td textAlign="center">Closed</Td>
          <Td textAlign="right">Full relocation</Td>
        </Tr>
        <Tr>
          <Td>Drew Breeze</Td>
          <Td>drew.breeze@easy.com</Td>
          <Td textAlign="center">Open</Td>
          <Td textAlign="right">Full relocation</Td>
        </Tr>
        <Tr>
          <Td>Sugar Magnolia</Td>
          <Td>sugar.magnolia@gd.com</Td>
          <Td textAlign="center">Open</Td>
          <Td textAlign="right">Part relocation</Td>
        </Tr>
      </TBody>
    </Table>
  ),
};

export const Bordered: Story = {
  render: () => (
    <Table bordered>
      <THead>
        <Tr>
          <Th>Talent name</Th>
          <Th>Email</Th>
          <Th textAlign="center">Current state</Th>
          <Th textAlign="right">Case type</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>Captain Picard</Td>
          <Td>c.picard@enterprise.org</Td>
          <Td textAlign="center">Open</Td>
          <Td textAlign="right">Full relocation</Td>
        </Tr>
        <Tr>
          <Td>Ford Prefect</Td>
          <Td>f.prefect@hhgttg.com</Td>
          <Td textAlign="center">Closed</Td>
          <Td textAlign="right">Part relocation</Td>
        </Tr>
        <Tr>
          <Td>Dietrich Eldert</Td>
          <Td>dietr-ehler@arketmay.com</Td>
          <Td textAlign="center">Closed</Td>
          <Td textAlign="right">Full relocation</Td>
        </Tr>
      </TBody>
    </Table>
  ),
};

Default.parameters = {
  docs: {
    storyDescription:
      "You can use the various table elements to make up your table without having to worry about the styling.",
  },
};

export const StickyHeaders: Story = {
  render: () => (
    <Box.div h="20rem" overflowY="auto">
      <Table>
        <THead isSticky>
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
    </Box.div>
  ),
};

export const WithClickableRows: Story = {
  render: () => (
    <Box.div h="20rem" overflowY="auto">
      <Table>
        <THead isSticky>
          <Tr>
            <Th>Column 1</Th>
            <Th>Column 2</Th>
            <Th>Column 3</Th>
          </Tr>
        </THead>
        <TBody>
          {map([...Array.from({ length: 100 }).keys()], (index) => (
            <Tr isClickable key={index}>
              <Td>Content</Td>
              <Td>Content</Td>
              <Td>Content</Td>
            </Tr>
          ))}
        </TBody>
      </Table>
    </Box.div>
  ),
};
export const Striped: Story = {
  render: () => (
    <Table striped>
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
          <Td>Captain Picard</Td>
          <Td>c.picard@enterprise.org</Td>
          <Td>Open</Td>
          <Td>Full relocation</Td>
        </Tr>
        <Tr>
          <Td>Ford Prefect</Td>
          <Td>f.prefect@hhgttg.com</Td>
          <Td>Closed</Td>
          <Td>Part relocation</Td>
        </Tr>
        <Tr>
          <Td>Dietrich Eldert</Td>
          <Td>dietr-ehler@arketmay.com</Td>
          <Td>Closed</Td>
          <Td>Full relocation</Td>
        </Tr>
        <Tr>
          <Td>Drew Breeze</Td>
          <Td>drew.breeze@easy.com</Td>
          <Td>Open</Td>
          <Td>Full relocation</Td>
        </Tr>
        <Tr>
          <Td>Sugar Magnolia</Td>
          <Td>sugar.magnolia@gd.com</Td>
          <Td>Open</Td>
          <Td>Part relocation</Td>
        </Tr>
      </TBody>
    </Table>
  ),
};

const ReactTable = () => {
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
                <ThButton
                  {...{
                    onClick: header.column.getToggleSortingHandler(),
                  }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                  {{
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted() as string] ?? null}
                </ThButton>
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

export const WithReactTable: Story = {
  render: (): JSX.Element => <ReactTable />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/7.0/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByText("First Name"));

    setTimeout(() => {
      userEvent.click(canvas.getByText("Last Name"));
    }, 2000);
  },
};

ReactTable.parameters = {
  docs: {
    storyDescription:
      "The table elements can be used with a headless table libray like Tanstack Table, formerly React Table. This allows you to build a datagrid on with the Pluto table elements.",
  },
};
