import { render, screen } from "@testing-library/react";
import React from "react";
import spaceTokens from "../../../design-tokens/src/tokens/space.tokens.json";
import { SpacingTokensTable } from "./SpacingTokensTable";

const numberOfTokens = Object.entries(spaceTokens.space).length;

describe("<SpacingTokensTable />", () => {
  it("renders correctly", () => {
    render(<SpacingTokensTable />);
    const renderIconSizeTokens = screen.getAllByRole("row");

    expect(renderIconSizeTokens).toHaveLength(numberOfTokens + 1); // adding a row here for the column headers
  });

  it("renders token name in the corrent format", () => {
    render(<SpacingTokensTable />);

    expect(screen.getByRole("cell", { name: /space0/i })).toBeInTheDocument();
  });
});
