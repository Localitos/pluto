import { render, screen } from "@testing-library/react";
import React from "react";
import { Icon } from "./Icon";

describe("<Icon />", () => {
  it("renders correctly", () => {
    render(<Icon data-testid="icon" decorative icon="AcademicCapIcon" />);
    const renderedIcon = screen.getByTestId("icon");
    expect(renderedIcon).toBeInTheDocument();
  });
});
