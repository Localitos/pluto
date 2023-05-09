import { render, screen } from "@testing-library/react";
import React from "react";
import { Pagination } from "./Pagination";

// eslint-disable-next-line lodash/prefer-noop, @typescript-eslint/no-empty-function
const NOOP = (): void => {};

describe("<Pagination />", () => {
  it("shows the aria label for the current page", () => {
    render(<Pagination currentPage={10} onPageChange={NOOP} totalPages={20} />);
    expect(screen.getByLabelText("Current Page, Page 10")).toBeInTheDocument();
  });

  it("shows the aria label for the next page and previous page", () => {
    render(<Pagination currentPage={10} onPageChange={NOOP} totalPages={20} />);
    expect(screen.getByLabelText("Goto Page 11")).toBeInTheDocument();
    expect(screen.getByLabelText("Goto Page 9")).toBeInTheDocument();
  });

  it("doesn't show the aria label for three pages ahead and behind because they are dots", () => {
    render(<Pagination currentPage={10} onPageChange={NOOP} totalPages={20} />);
    expect(screen.queryByLabelText("Goto Page 15")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Goto Page 6")).not.toBeInTheDocument();
  });
});
