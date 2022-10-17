import { render, screen } from "@testing-library/react";
import React from "react";
import { Default } from "./Table.stories";

describe("<Table />", () => {
  it("should render", async () => {
    render(<Default {...Default.args} />);

    const rowHeaders = screen.getAllByRole("columnheader");
    expect(rowHeaders[0]).toHaveTextContent("Talent name");
    expect(rowHeaders[1]).toHaveTextContent("Email");
    expect(rowHeaders[2]).toHaveTextContent("Current state");
    expect(rowHeaders[3]).toHaveTextContent("Case type");

    const cells = screen.getAllByRole("cell");
    expect(cells[0]).toHaveTextContent("Dietrich Eldert");
    expect(cells[1]).toHaveTextContent("dietr-ehler@arketmay.com");
    expect(cells[2]).toHaveTextContent("Closed");
    expect(cells[3]).toHaveTextContent("Full relocation");
  });
});
