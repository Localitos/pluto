import { render, screen } from "@testing-library/react";
import React from "react";
import { Theme } from "@localyze-pluto/theme";
import { Text } from "./Text";

const childString = "This is a span";

describe("<Text />", () => {
  it("should render a Text as a span", () => {
    render(<Text as="span">{childString}</Text>);
    const renderedText = screen.getByText(childString);
    expect(renderedText).toBeInTheDocument();
  });

  it("should render a Text as a heading", () => {
    render(<Text as="h2">This is a heading</Text>);
    const renderedText = screen.getByRole("heading", { level: 2 });
    expect(renderedText).toBeInTheDocument();
  });

  it("should render with font styles", () => {
    render(
      <Text
        as="span"
        color="colorTextLink"
        fontSize="fontSize10"
        fontWeight="fontWeightMedium"
        lineHeight="lineHeight20"
      >
        {childString}
      </Text>
    );
    const renderedText = screen.getByText(childString);
    expect(renderedText).toHaveStyleRule("color", "colorTextLink");
    expect(renderedText).toHaveStyleRule("font-size", "fontSize10");
    expect(renderedText).toHaveStyleRule("font-weight", "fontWeightMedium");
    expect(renderedText).toHaveStyleRule("line-height", "lineHeight20");
  });

  it("should render as an anchor with an href", () => {
    render(
      <Text
        as="a"
        href="https://localyzeapp.com"
        rel="noreferrer noopener"
        target="_blank"
      >
        This is an anchor
      </Text>
    );
    const renderedText = screen.getByRole("link");
    expect(renderedText).toHaveAttribute(
      "href",
      expect.stringContaining("https://localyzeapp.com")
    );
    expect(renderedText).toHaveAttribute(
      "rel",
      expect.stringContaining("noreferrer noopener")
    );
    expect(renderedText).toHaveAttribute(
      "target",
      expect.stringContaining("_blank")
    );
  });

  it("should render responsive values", () => {
    render(
      <Theme.Provider>
        <Text as="span" color={["colorText", "colorTextStronger"]}>
          {childString}
        </Text>
      </Theme.Provider>
    );
    const renderedText = screen.getByText(childString);
    expect(renderedText).toHaveStyleRule("color", "#64748B");
    expect(renderedText).toHaveStyleRule("color", "#334155", {
      media: "screen and (min-width:25rem)",
    });
  });

  it("should map pseudo selector color values", () => {
    render(
      <Text
        _hover={{
          color: "colorTextLink",
        }}
        as="span"
      >
        {childString}
      </Text>
    );
    const renderedText = screen.getByText(childString);
    expect(renderedText).toHaveStyleRule("color", "colorTextLink", {
      target: ":hover",
    });
  });

  it("should map responsive pseudo selector color values", () => {
    render(
      <Theme.Provider>
        <Text
          _hover={{
            color: ["colorTextLink", "colorTextError"],
          }}
          as="span"
        >
          {childString}
        </Text>
      </Theme.Provider>
    );
    const renderedText = screen.getByText(childString);
    expect(renderedText).toHaveStyleRule("color", "#102EE9", {
      target: ":hover",
    });
    expect(renderedText).toHaveStyleRule("color", "#B91C1C", {
      target: ":hover",
      media: "screen and (min-width:25rem)",
    });
  });
});
