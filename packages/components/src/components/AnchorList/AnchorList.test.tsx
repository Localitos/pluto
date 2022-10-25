import { render, screen } from "@testing-library/react";
import React from "react";
import { Anchor } from "../Anchor/Anchor";
import { AnchorList } from "./AnchorList";

describe("<AnchorList />", () => {
  it("renders correctly", () => {
    render(
      <AnchorList>
        <Anchor href="http://www.localyze.com">Link 1</Anchor>
      </AnchorList>
    );

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveTextContent("Link 1");
  });
});
