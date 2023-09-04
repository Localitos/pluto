import { render, screen } from "@testing-library/react";
import React from "react";
import fontWeightTokens from "../../../design-tokens/src/tokens/font-weight.tokens.json";
import { FontWeightTokensTable } from "./FontWeightTokensTable";

const numberOfTokens = Object.entries(fontWeightTokens["font-weight"]).length;

describe("<FontWeightTokensTable />", () => {
  it("renders correctly", () => {
    render(<FontWeightTokensTable />);
    const renderIconSizeTokens = screen.getAllByRole("row");

    expect(renderIconSizeTokens).toHaveLength(numberOfTokens + 1); // adding a row here for the column headers
  });

  it("renders token name in the corrent format", () => {
    render(<FontWeightTokensTable />);

    expect(
      screen.getByRole("cell", { name: /fontweightlight/i })
    ).toBeInTheDocument();
  });
});
