import { render, screen } from "@testing-library/react";
import React from "react";
import { AnchorList } from "./AnchorList";

describe("<AnchorList />", () => {
  it("renders correctly", () => {
    render(
      <AnchorList>
        <a href="http://www.localyze.com">Link 1</a>
      </AnchorList>
    );

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveTextContent("Link 1");
  });
});
