import { render, screen } from "@testing-library/react";
import React from "react";
import { RichText } from "./RichText";

const stringExample =
  '<h1>heading one test</h1> <h2>heading two test</h2> <h3>heading three test</h3> <h4>heading four test</h4> <h5>heading five test</h5> <h6>heading six test</h6> <p>paragraph test</p> <ul><li>list item</li></ul> <hr/> <a href="https://test.com">anchor test</a>';

const externalAnchorString = '<a href="https://test.com">anchor test</a>';

describe("<RichText />", () => {
  it("should render html elements from a string", () => {
    render(<RichText>{stringExample}</RichText>);

    const renderedH1 = screen.getByRole("heading", { level: 1 });
    const renderedH2 = screen.getByRole("heading", { level: 2 });
    const renderedH3 = screen.getByRole("heading", { level: 3 });
    const renderedH4 = screen.getByRole("heading", { level: 4 });
    const renderedH5 = screen.getByRole("heading", { level: 5 });
    const renderedH6 = screen.getByRole("heading", { level: 6 });
    const renderedP = screen.getByText("paragraph test");
    const renderedUL = screen.getByRole("list");
    const renderedLI = screen.getByRole("listitem");
    const renderedHR = screen.getByRole("separator");
    const renderedAnchor = screen.getByRole("link");

    expect(renderedH1).toHaveTextContent("heading one test");
    expect(renderedH2).toHaveTextContent("heading two test");
    expect(renderedH3).toHaveTextContent("heading three test");
    expect(renderedH4).toHaveTextContent("heading four test");
    expect(renderedH5).toHaveTextContent("heading five test");
    expect(renderedH6).toHaveTextContent("heading six test");
    expect(renderedP).toBeVisible();
    expect(renderedUL).toBeVisible();
    expect(renderedLI).toHaveTextContent("list item");
    expect(renderedHR).toBeVisible();
    expect(renderedAnchor).toHaveTextContent("anchor test");
    expect(renderedAnchor).not.toHaveAttribute("target");
    expect(renderedAnchor).not.toHaveAttribute("rel");
  });

  it("should render an anchor with external attributes", () => {
    render(<RichText externalAnchors>{externalAnchorString}</RichText>);
    const renderedAnchor = screen.getByRole("link");
    expect(renderedAnchor).toBeVisible();
    expect(renderedAnchor).toHaveTextContent("anchor test");
    expect(renderedAnchor).toHaveAttribute("target", "_blank");
    expect(renderedAnchor).toHaveAttribute("rel", "noreferrer noopener");
  });
});
