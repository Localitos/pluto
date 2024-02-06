import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { Anchor } from "./Anchor";

describe("<Anchor />", () => {
  it("renders correctly", () => {
    render(<Anchor href="https://www.localyze.com">I am an anchor</Anchor>);

    expect(screen.getByRole("link")).toHaveTextContent("I am an anchor");
  });

  it("renders as external link", () => {
    render(
      <Anchor href="https://www.localyze.com" isExternal>
        I am an anchor
      </Anchor>,
    );

    const link = screen.getByRole("link");

    expect(link).toHaveProperty("target", "_blank");
    expect(link).toHaveProperty("rel", "noreferrer noopener");
  });
});
