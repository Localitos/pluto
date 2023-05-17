import { useMemo } from "react";

const DOTS = "...";

/* This function is used to generate the range of pages that 
 are visible for either the left side, right side, or middle pages of the pagination  */
const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => Number(`${idx + start}`));
};

/* This hook generates an array that calculates where to put the dots depending on the current page and the number of pages */
export const usePagination = (
  pageCount: number,
  pagesAroundCurrentPage: number, // The number of pages to display to each side of the current page
  currentPage: number
): (number | string)[] => {
  return useMemo(() => {
    // The fixedItems is determined as firstPage + Dots + pagesAroundCurrentPage + currentPage + siblingCount + Dots + lastPage (each of these is 1)
    const fixedItems = pagesAroundCurrentPage + 5;
    const fixedItemsOnEachSide = 3;
    const firstPage = 1;
    const lastPage = pageCount;

    /*
      If the number of fixed items is less than or equal to the total count we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (fixedItems >= lastPage) {
      return range(firstPage, lastPage);
    }

    const leftSiblingIndex = Math.max(
      currentPage - pagesAroundCurrentPage,
      firstPage
    );
    const rightSiblingIndex = Math.min(
      currentPage + pagesAroundCurrentPage,
      lastPage
    );

    const shouldShowLeftDots = leftSiblingIndex >= 5;
    const shouldShowRightDots =
      rightSiblingIndex < pageCount - fixedItemsOnEachSide;

    const lastPageIndex = pageCount;

    const ifOnFirstFivePages = !shouldShowLeftDots && shouldShowRightDots;

    if (ifOnFirstFivePages) {
      const leftItemCount = fixedItemsOnEachSide + pagesAroundCurrentPage + 1;
      const leftRange = range(firstPage, leftItemCount);

      return [...leftRange, DOTS, pageCount];
    }

    const ifOnLastFivePages = shouldShowLeftDots && !shouldShowRightDots;
    if (ifOnLastFivePages) {
      const rightItemCount = fixedItemsOnEachSide + pagesAroundCurrentPage;
      const rightRange = range(lastPage - rightItemCount, lastPage);
      return [firstPage, DOTS, ...rightRange];
    }

    const ifOnMiddlePages = shouldShowLeftDots && shouldShowRightDots;
    if (ifOnMiddlePages) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPage, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return [];
  }, [pageCount, pagesAroundCurrentPage, currentPage]);
};
