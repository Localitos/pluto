import React from "react";
import { render, screen, RenderResult } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { UtilityCard, UtilityCardProps } from "./UtilityCard";

const onClickMock = jest.fn();

const defaultMockProps = {
  emoji: "📦",
  subTitle: "a service tag",
  title: "Good title!",
};

const UtilityCardMock = (
  props?: Partial<UtilityCardProps>,
): React.JSX.Element => {
  const { clickable, onClick = onClickMock, ...restProps } = props || {};

  const defaultProps: UtilityCardProps = {
    as: "div",
    ...defaultMockProps,
    ...(clickable ? { clickable, onClick } : { clickable: false }),
  };

  return <UtilityCard {...defaultProps} {...restProps} />;
};

const renderDefaultCard = (): RenderResult => {
  return render(<UtilityCardMock />);
};

const renderCardWithContent = (): RenderResult => {
  return render(
    <UtilityCardMock
      content={<div>Extra content added to the card as details</div>}
    />,
  );
};

const renderClickableCard = (): RenderResult => {
  return render(<UtilityCardMock clickable onClick={onClickMock} />);
};

describe("<UtilityCard>", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Default card", () => {
    it("renders text props", () => {
      renderDefaultCard();

      expect(screen.getByText("Good title!")).toBeVisible();
      expect(screen.getByText("a service tag")).toBeVisible();
    });

    it("renders an emoji", () => {
      renderDefaultCard();

      expect(screen.getByText("📦")).toBeVisible();
    });
  });

  describe("Card with content", () => {
    it("renders content when provided", () => {
      renderCardWithContent();

      expect(
        screen.getByText("Extra content added to the card as details"),
      ).toBeInTheDocument();
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
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  describe("In list card", () => {
    it('renders card as listitem when "as" prop is "li"', () => {
      render(<UtilityCardMock as="li" />);

      expect(screen.getByRole("listitem")).toBeInTheDocument();
    });
  });
});
