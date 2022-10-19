import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
import React from "react";
import { Button } from "./Button";

describe("Button", () => {
  describe("Render", () => {
    it("should render a primary button", () => {
      render(<Button variant="primary">Primary Button</Button>);
      const renderedButton = screen.getByRole("button");
      expect(renderedButton).toBeInTheDocument();
    });

    it("should render as an anchor", () => {
      render(
        <Button as="a" href="#" variant="primary">
          Primary Button
        </Button>
      );
      const renderedButton = screen.getByRole("link");
      expect(renderedButton).toBeInTheDocument();
    });

    it("should render disabled set on HTML when disabled", () => {
      render(
        <Button disabled variant="primary">
          Primary Button
        </Button>
      );
      const renderedButton = screen.getByRole("button");
      expect(renderedButton).toBeDisabled();
    });

    it("should render loading set on HTML when loading", () => {
      render(
        <Button loading variant="primary">
          Primary Button
        </Button>
      );
      const renderedButton = screen.getByRole("button");
      expect(renderedButton).toHaveAttribute("aria-busy");
    });
  });

  describe("Event handlers", () => {
    it("should call the appropriate event handlers", async () => {
      const onClickMock: jest.Mock = jest.fn();
      const onMouseEnterMock: jest.Mock = jest.fn();
      const onMouseLeaveMock: jest.Mock = jest.fn();

      const user = userEvent.setup() as UserEvent;

      render(
        <Button
          onClick={onClickMock}
          onMouseEnter={onMouseEnterMock}
          onMouseLeave={onMouseLeaveMock}
          variant="primary"
        >
          button
        </Button>
      );

      const renderedBox = screen.getByRole("button");
      expect(renderedBox).toBeInTheDocument();

      await user.click(renderedBox);
      expect(onClickMock).toHaveBeenCalledTimes(1);

      await user.hover(renderedBox);
      expect(onMouseEnterMock).toHaveBeenCalledTimes(1);

      await user.unhover(renderedBox);
      expect(onMouseLeaveMock).toHaveBeenCalledTimes(1);
    });
  });
});
