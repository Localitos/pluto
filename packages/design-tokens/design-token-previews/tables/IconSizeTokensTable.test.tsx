import { render, screen } from "@testing-library/react";
import React from "react";
import iconSizeTokens from "../../src/tokens/size.tokens.json";
import { IconSizeTokensTable } from "./IconSizeTokensTable";

const numberOfTokens = Object.entries(iconSizeTokens.size).length;

describe("<IconSizeTokensTable />", () => {
  it("renders correctly", () => {
    render(<IconSizeTokensTable />);
    const renderIconSizeTokens = screen.getAllByRole("row");

    expect(renderIconSizeTokens).toHaveLength(numberOfTokens + 1); // adding a row here for the column headers
  });

  it("renders token name in the corrent format", () => {
    render(<IconSizeTokensTable />);

    expect(
      screen.getByRole("cell", { name: /sizeicon10$/i })
    ).toBeInTheDocument();
  });

  it("renders pixels in the corrent format", () => {
    render(<IconSizeTokensTable />);

    expect(screen.getByRole("cell", { name: /12px/i })).toBeInTheDocument();
  });

  it("renders rems in the corrent format", () => {
    render(<IconSizeTokensTable />);

    expect(screen.getByRole("cell", { name: /0.75rem/i })).toBeInTheDocument();
  });
});
