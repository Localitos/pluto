import { userEvent } from "@testing-library/user-event";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ContentCard } from "./ContentCard";

describe("<ContentCard>", () => {
  const user = userEvent.setup();

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

  it("calls onClickButton when the button is clicked", async () => {
    const onClick = jest.fn();

    render(
      <ContentCard
        buttonText="click me"
        date=""
        imageAlt=""
        imageSrc=""
        onClickButton={onClick}
        tag=""
        text=""
        title=""
      />,
    );

    const button = screen.getByRole("button", { name: "click me" });

    expect(button).toBeVisible();

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  describe("when there is a href", () => {
    it("the card is rendered as a link", () => {
      render(
        <ContentCard
          buttonText="alow"
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
});
