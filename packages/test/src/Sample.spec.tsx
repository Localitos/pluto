import React from "react";
import { render } from "@testing-library/react";
import { Sample } from "./Sample";

describe("<Button />", () => {
  it("renders button", () => {
    const { getByText } = render(<Sample label="Bla" />);
    const linkElement = getByText(/bla/i);
    expect(linkElement).toBeDefined();
  });
});
