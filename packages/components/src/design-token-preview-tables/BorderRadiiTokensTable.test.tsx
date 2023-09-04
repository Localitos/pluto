import { render, screen } from "@testing-library/react";
import React from "react";
import borderRadiiTokens from "../../../design-tokens/src/tokens/border-radius.tokens.json";
import { BorderRadiiTokensTable } from "./BorderRadiiTokensTable";

const numberOfTokens = Object.entries(
  borderRadiiTokens["border-radius"]
).length;

describe("<BorderRadiiTokensTable />", () => {
  it("renders correctly", () => {
    render(<BorderRadiiTokensTable />);
    const renderIconSizeTokens = screen.getAllByRole("row");

    expect(renderIconSizeTokens).toHaveLength(numberOfTokens + 1); // adding a row here for the column headers
  });

  it("renders token name in the corrent format", () => {
    render(<BorderRadiiTokensTable />);

    expect(
      screen.getByRole("cell", { name: /borderradius0/i })
    ).toBeInTheDocument();
  });
});
