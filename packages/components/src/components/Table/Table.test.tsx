import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Default, WithReactTable } from "./Table.stories";

describe("<Table />", () => {
  it("should render", async () => {
    // Ignoring this error because the story has children.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render(<Default.render {...Default.args} />);

    const rowHeaders = screen.getAllByRole("columnheader");
    expect(rowHeaders[0]).toHaveTextContent("Talent name");
    expect(rowHeaders[1]).toHaveTextContent("Email");
    expect(rowHeaders[2]).toHaveTextContent("Current state");
    expect(rowHeaders[3]).toHaveTextContent("Case type");

    const cells = screen.getAllByRole("cell");
    expect(cells[0]).toHaveTextContent("Captain Picard");
    expect(cells[1]).toHaveTextContent("c.picard@enterprise.org");
    expect(cells[2]).toHaveTextContent("Open");
    expect(cells[3]).toHaveTextContent("Full relocation");
  });

  it("should sort the columns", async () => {
    // Ignoring this error because the story has children.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render(<WithReactTable.render {...WithReactTable.args} />);

    const rowHeaders = screen.getAllByRole("columnheader");
    expect(rowHeaders[0]).toHaveTextContent("First Name");
    expect(rowHeaders[1]).toHaveTextContent("Last Name");
    expect(rowHeaders[2]).toHaveTextContent("Age");
    expect(rowHeaders[3]).toHaveTextContent("Visits");
    expect(rowHeaders[4]).toHaveTextContent("Status");

    await userEvent.click(screen.getByText("First Name"));
    const cells = screen.getAllByRole("cell");
    expect(cells[0]).toHaveTextContent("Damara");
    expect(cells[5]).toHaveTextContent("Dietrich");
    expect(cells[10]).toHaveTextContent("Hogan");
  });
});
