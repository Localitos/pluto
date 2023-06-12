import { renderHook } from "@testing-library/react";
import { usePagination } from "./usePagination";

describe("<Pagination />", () => {
  it("returns seven blocks when total pages is seven or less", () => {
    const totalPages = 7;
    const pagesAroundCurrentPage = 1;
    const currentPage = 1;

    const { result } = renderHook(() =>
      usePagination(totalPages, pagesAroundCurrentPage, currentPage)
    );

    expect(result.current).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("returns three blocks when total pages is three", () => {
    const totalPages = 3;
    const pagesAroundCurrentPage = 1;
    const currentPage = 1;

    const { result } = renderHook(() =>
      usePagination(totalPages, pagesAroundCurrentPage, currentPage)
    );

    expect(result.current).toEqual([1, 2, 3]);
  });

  it("returns seven blocks and two sets of dots when total pages is 20 and current page is ten", () => {
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
    const currentPage = 3;

    const { result } = renderHook(() =>
      usePagination(totalPages, pagesAroundCurrentPage, currentPage)
    );

    expect(result.current).toEqual([1, 2, 3, 4, 5, "...", 20]);
  });

  it("returns the correct page numbers and one set of dots on the left when current page is more than five less than total pages", () => {
    const totalPages = 20;
    const pagesAroundCurrentPage = 1;
    const currentPage = 18;

    const { result } = renderHook(() =>
      usePagination(totalPages, pagesAroundCurrentPage, currentPage)
    );

    expect(result.current).toEqual([1, "...", 16, 17, 18, 19, 20]);
  });

  it("returns the correct page numbers and one set of dots on the left when current page equals total pages", () => {
    const totalPages = 20;
    const pagesAroundCurrentPage = 1;
    const currentPage = 20;

    const { result } = renderHook(() =>
      usePagination(totalPages, pagesAroundCurrentPage, currentPage)
    );

    expect(result.current).toEqual([1, "...", 16, 17, 18, 19, 20]);
  });
});
