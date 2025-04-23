import React from "react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import {
  ContentCard,
  ContentCardProps,
  InteractiveElementType,
} from "./ContentCard";

const HREF = "https://google.com";

const ContentCardMock = (props: Partial<ContentCardProps>) => {
  const defaultProps: ContentCardProps = {
    imageAlt: "a test image",
    imageSrc: "path-to-image.jpg",

    text: "hello! Long text",
    title: "Good title!",
  };

  return <ContentCard {...defaultProps} {...props} />;
};

describe("<ContentCard>", () => {
  it("renders text props", () => {
    render(<ContentCardMock date="Wed, Dec 27 2023" tag="🏠 housing" />);

    expect(screen.getByText("Good title!")).toBeVisible();
    expect(screen.getByText("hello! Long text")).toBeVisible();
    expect(screen.getByText("🏠 housing")).toBeVisible();
    expect(screen.getByText("Wed, Dec 27 2023")).toBeVisible();
  });

  it("renders image", () => {
    render(
      <ContentCardMock imageAlt="a test image" imageSrc="path-to-image.jpg" />,
    );

    expect(screen.getByAltText("a test image")).toHaveAttribute(
      "src",
      "path-to-image.jpg",
    );
  });

  it("does not render card as link when interactive element type is not passed", () => {
    render(<ContentCardMock />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it('renders card as link when interactive element type is "card"', () => {
    render(
      <ContentCardMock
        as="a"
        href={HREF}
        interactiveElementType={InteractiveElementType.Card}
      />,
    );

    const cardLink = screen.getByRole("link");
    expect(cardLink).toHaveAttribute("href", HREF);
  });

  it('renders button as link when interactive element type is "button"', () => {
    render(
      <ContentCardMock
        callToAction="Go to Page"
        href={HREF}
        interactiveElementType={InteractiveElementType.Button}
      />,
    );

    const cardButton = screen.getByRole("link", { name: "Go to Page" });
    expect(cardButton).toHaveAttribute("href", HREF);
  });

  it("renders custom call to action", async () => {
    const user = userEvent.setup();
    const onClickSpy = jest.fn();

    render(
      <ContentCardMock
        callToAction={<button onClick={onClickSpy}>anything!</button>}
        href={HREF}
        interactiveElementType={InteractiveElementType.Custom}
      />,
    );

    const cardButton = screen.getByRole("button", { name: "anything!" });
    expect(cardButton).toBeVisible();

    await user.click(cardButton);

    expect(onClickSpy).toHaveBeenCalled();
  });

  it('renders anchor as link when interactive element type is "anchor"', () => {
    render(
      <ContentCardMock
        callToAction="This is an Anchor"
        href={HREF}
        interactiveElementType={InteractiveElementType.Anchor}
      />,
    );

    const cardAnchor = screen.getByRole("link", { name: "This is an Anchor" });
    expect(cardAnchor).toHaveAttribute("href", HREF);
  });

  it("renders interactive element with target blank when target is passed", () => {
    render(
      <ContentCardMock
        callToAction="This is an Anchor"
        href={HREF}
        interactiveElementType={InteractiveElementType.Anchor}
        target="_blank"
      />,
    );

    const cardAnchor = screen.getByRole("link", { name: "This is an Anchor" });
    expect(cardAnchor).toHaveAttribute("target", "_blank");
  });

  it('renders card as listitem when "as" prop is "li"', () => {
    render(
      <ContentCardMock
        as="li"
        date=""
        imageAlt=""
        imageSrc="http://localhost"
        text=""
        title=""
      />,
    );

    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  it("calls onClick callback when interactive element is clicked", async () => {
    const user = userEvent.setup();

    const onClick = jest.fn();

    render(
      <ContentCardMock
        as="a"
        href={HREF}
        interactiveElementType={InteractiveElementType.Card}
        onClick={onClick}
      />,
    );

    const card = screen.getByRole("link");

    card.addEventListener("click", (event) => event.preventDefault(), false);

    await user.click(card);
    expect(onClick).toHaveBeenCalled();
  });
});
