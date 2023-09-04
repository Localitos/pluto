import { render, screen } from "@testing-library/react";
import React from "react";
import fontSizeTokens from "../../../design-tokens/src/tokens/font-size.tokens.json";
import { FontSizeTokensTable } from "./FontSizeTokensTable";

const numberOfTokens = Object.entries(fontSizeTokens["font-size"]).length;

describe("<FontSizeTokensTable />", () => {
  it("renders correctly", () => {
    render(<FontSizeTokensTable />);
    const renderIconSizeTokens = screen.getAllByRole("row");

    expect(renderIconSizeTokens).toHaveLength(numberOfTokens + 1); // adding a row here for the column headers
  });

  it("renders token name in the corrent format", () => {
    render(<FontSizeTokensTable />);

    expect(
      screen.getByRole("cell", { name: /fontsize10/i })
    ).toBeInTheDocument();
  });
});
