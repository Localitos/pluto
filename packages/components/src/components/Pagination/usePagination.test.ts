import { renderHook } from "@testing-library/react";
import { usePagination } from "./usePagination";

describe("<Pagination />", () => {
  it("returns the correct page numbers and dots when current page is more than five or less than total pages", () => {
    const totalPages = 20;
    const pagesAroundCurrentPage = 1;
    const currentPage = 10;

    const { result } = renderHook(() =>
      usePagination(totalPages, pagesAroundCurrentPage, currentPage)
    );

    expect(result.current).toEqual([1, "...", 9, 10, 11, "...", 20]);
  });

  it("returns the correct page numbers and one set of dots on the right when current page is less than five", () => {
    const totalPages = 20;
    const pagesAroundCurrentPage = 1;
    const currentPage = 5;

    const { result } = renderHook(() =>
      usePagination(totalPages, pagesAroundCurrentPage, currentPage)
    );

    expect(result.current).toEqual([1, 2, 3, 4, 5, "...", 20]);
  });

  it("returns the correct page numbers and one set of dots on the left when current page is more than five less than total pages", () => {
    const totalPages = 20;
    const pagesAroundCurrentPage = 1;
    const currentPage = 17;

    const { result } = renderHook(() =>
      usePagination(totalPages, pagesAroundCurrentPage, currentPage)
    );

    expect(result.current).toEqual([1, "...", 16, 17, 18, 19, 20]);
  });
});
