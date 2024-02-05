import React from "react";
import { render, screen } from "@testing-library/react";
import { ContentCard } from "./ContentCard";

describe("<ContentCard>", () => {
  it("renders text props", () => {
    render(
      <ContentCard
        date="Wed, Dec 27 2023"
        href=""
        imageAlt=""
        imageSrc=""
        tag="🏠 housing"
        text="hello! Long text"
        title="Good title!"
      />,
    );

    expect(screen.getByText("Good title!")).toBeVisible();
    expect(screen.getByText("hello! Long text")).toBeVisible();
    expect(screen.getByText("🏠 housing")).toBeVisible();
    expect(screen.getByText("Wed, Dec 27 2023")).toBeVisible();
  });

  it("renders image", () => {
    render(
      <ContentCard
        date=""
        href=""
        imageAlt="a test image"
        imageSrc="path-to-image.jpg"
        tag=""
        text=""
        title=""
      />,
    );

    expect(screen.getByAltText("a test image")).toHaveAttribute(
      "src",
      "path-to-image.jpg",
    );
  });

  describe("when there is a href", () => {
    it("the card is rendered as a link", () => {
      render(
        <ContentCard
          date=""
          href="google.com"
          imageAlt=""
          imageSrc=""
          text=""
          title=""
        />,
      );

      const cardLink = screen.getByRole("link");

      expect(cardLink).toHaveAttribute("href", "google.com");
    });
  });

  describe("when there is not a href", () => {
    it("allows a link to be rendered on the body of the Card", async () => {
      render(
        <ContentCard
          date=""
          imageAlt=""
          imageSrc=""
          linkHref="google.com"
          linkText="I am a link"
          text=""
          title=""
        />,
      );

      const link = screen.getByRole("link", { name: "I am a link" });

      expect(link).toHaveAttribute("href", "google.com");
    });
  });

  it("accepts children property", () => {
    render(
      <ContentCard date="" href="" imageAlt="" imageSrc="" text="" title="">
        <button>Click me</button>
      </ContentCard>,
    );

    expect(screen.getByRole("button", { name: "Click me" })).toBeVisible();
  });
});
