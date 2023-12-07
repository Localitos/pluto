import { render, screen } from "@testing-library/react";
import React from "react";
import noop from "lodash/noop";
import { userEvent } from "@testing-library/user-event";
import { Pagination } from "./Pagination";

describe("<Pagination />", () => {
  it("shows the aria label for the current page", () => {
    render(<Pagination currentPage={10} onPageChange={noop} pageCount={20} />);
    expect(screen.getByLabelText("Current Page, Page 10")).toBeInTheDocument();
  });

  it("shows the aria label for the next page and previous page", () => {
    render(<Pagination currentPage={10} onPageChange={noop} pageCount={20} />);
    expect(screen.getByLabelText("Goto Page 11")).toBeInTheDocument();
    expect(screen.getByLabelText("Goto Page 9")).toBeInTheDocument();
  });

  it("doesn't show the aria label for three pages ahead and behind", () => {
    render(<Pagination currentPage={10} onPageChange={noop} pageCount={20} />);
    expect(screen.queryByLabelText("Goto Page 15")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Goto Page 6")).not.toBeInTheDocument();
  });

  it("calls onPageChange with the correct page number", async () => {
    const onPageChange = jest.fn();

    const user = userEvent.setup();

    render(
      <Pagination
        currentPage={10}
        onPageChange={onPageChange}
        pageCount={20}
      />,
    );

    const firstPage = screen.getByRole("button", { name: "Goto Page 1" });
    await user.click(firstPage);
    expect(onPageChange).toHaveBeenCalledWith(1);

    const lastPage = screen.getByRole("button", { name: /20/i });
    await user.click(lastPage);
    expect(onPageChange).toHaveBeenCalledWith(20);

    const pageEleven = screen.getByRole("button", { name: /11/i });
    await user.click(pageEleven);
    expect(onPageChange).toHaveBeenCalledWith(11);

    const nextPage = screen.getByRole("button", { name: "Next page" });
    await user.click(nextPage);
    expect(onPageChange).toHaveBeenCalledWith(11);

    const prevPage = screen.getByRole("button", { name: "Previous page" });
    await user.click(prevPage);
    expect(onPageChange).toHaveBeenCalledWith(9);
  });
});
