import { render, screen } from "@testing-library/react";
import React from "react";
import borderWidthTokens from "../../../design-tokens/src/tokens/border-width.tokens.json";
import { BorderWidthTokensTable } from "./BorderWidthTokensTable";

const numberOfTokens = Object.entries(borderWidthTokens["border-width"]).length;

describe("<BorderWidthTokensTable />", () => {
  it("renders correctly", () => {
    render(<BorderWidthTokensTable />);
    const renderIconSizeTokens = screen.getAllByRole("row");

    expect(renderIconSizeTokens).toHaveLength(numberOfTokens + 1); // adding a row here for the column headers
  });

  it("renders token name in the corrent format", () => {
    render(<BorderWidthTokensTable />);

    expect(
      screen.getByRole("cell", { name: /borderwidth0/i })
    ).toBeInTheDocument();
  });
});
