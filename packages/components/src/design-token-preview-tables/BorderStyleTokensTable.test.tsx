import { render, screen } from "@testing-library/react";
import React from "react";
import borderStyleTokens from "../../../design-tokens/src/tokens/border-style.tokens.json";
import { BorderStyleTokensTable } from "./BorderStyleTokensTable";

const numberOfTokens = Object.entries(borderStyleTokens["border-style"]).length;

describe("<BorderStyleTokensTable />", () => {
  it("renders correctly", () => {
    render(<BorderStyleTokensTable />);
    const renderIconSizeTokens = screen.getAllByRole("row");

    expect(renderIconSizeTokens).toHaveLength(numberOfTokens + 1); // adding a row here for the column headers
  });

  it("renders token name in the corrent format", () => {
    render(<BorderStyleTokensTable />);

    expect(
      screen.getByRole("cell", { name: /borderstylesolid/i })
    ).toBeInTheDocument();
  });
});
