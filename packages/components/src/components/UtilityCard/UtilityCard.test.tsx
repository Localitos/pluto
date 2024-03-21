import React from "react";
import { render, screen, RenderResult } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import {
  UtilityCard,
  UtilityCardProps,
  InteractiveElementType,
} from "./UtilityCard";

const onClick = jest.fn();

const defaultMockProps = {
  imageSrc: "path-to-image.jpg",
  categoryTag: "a service tag",
  title: "Good title!",
};

const UtilityCardMock = (props: Partial<UtilityCardProps>) => {
  const defaultProps: UtilityCardProps = {
    as: "div",
    ...defaultMockProps,
  };

  return <UtilityCard {...defaultProps} {...props} />;
};

const renderDefaultCard = (): RenderResult => {
  return render(<UtilityCardMock />);
};

const renderCardWithBadge = (): RenderResult => {
  return render(<UtilityCardMock status="In progress" />);
};

const renderClickableCard = (): RenderResult => {
  return render(
    <UtilityCardMock
      interactiveElementType={InteractiveElementType.Card}
      onClick={onClick}
    />,
  );
};

describe("<UtilityCard>", () => {
  describe("Default card", () => {
    it("renders text props", () => {
      renderDefaultCard();

      expect(screen.getByText("Good title!")).toBeVisible();
      expect(screen.getByText("a service tag")).toBeVisible();
    });

    it("does not render a badge", () => {
      renderDefaultCard();

      expect(screen.queryByText("In progress")).not.toBeInTheDocument();
    });

    it("renders an image", () => {
      renderDefaultCard();

      expect(screen.getByAltText("")).toHaveAttribute(
        "src",
        "path-to-image.jpg",
      );
    });
  });

  describe("Card with badge", () => {
    it("renders a badge", () => {
      renderCardWithBadge();

      expect(screen.getByText("In progress")).toBeInTheDocument();
    });
  });

  describe("Clickable card", () => {
    it('renders card as link when interactive element type is "card"', () => {
      renderClickableCard();

      const cardAsButton = screen.getByRole("button");
      expect(cardAsButton).toBeInTheDocument();
    });

    it("calls onClick callback when interactive element is clicked", async () => {
      renderClickableCard();

      const user = userEvent.setup();

      const card = screen.getByRole("button");

      card.addEventListener("click", (event) => event.preventDefault(), false);

      await user.click(card);
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe("In list card", () => {
    it('renders card as listitem when "as" prop is "li"', () => {
      render(<UtilityCardMock as="li" />);

      expect(screen.getByRole("listitem")).toBeInTheDocument();
    });
  });
});
