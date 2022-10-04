import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
import React from "react";
import { Box } from "./";

const childString = "This is a div";

describe("<Box />", () => {
  it("should render a Box as a div", () => {
    render(<Box.div>{childString}</Box.div>);
    const renderedBox = screen.getByText(childString);
    expect(renderedBox).toBeInTheDocument();
  });

  it("should render a Box as a button", () => {
    render(<Box.button>This is a button</Box.button>);
    const renderedBox = screen.getByRole("button");
    expect(renderedBox).toBeInTheDocument();
  });

  it("should render with a display none prop", () => {
    render(<Box.div display="none">{childString}</Box.div>);
    const renderedBox = screen.getByText(childString);
    expect(renderedBox).not.toBeVisible();
  });

  it("should render as an button with an onClick", async () => {
    const onClickMock: jest.Mock = jest.fn();

    const user = userEvent.setup() as UserEvent;

    render(<Box.button onClick={onClickMock}>This is a button</Box.button>);
    const renderedBox = screen.getByRole("button");
    expect(renderedBox).toBeInTheDocument();

    await user.click(renderedBox);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
