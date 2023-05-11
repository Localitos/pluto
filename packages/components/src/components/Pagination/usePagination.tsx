import { useMemo } from "react";

const DOTS = "...";

const range = (start: number, end: number): string[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => `${idx + start}`);
};

export const usePagination = (
  totalCount: number,
  pagesAroundCurrentPage = 1, // The number of pages to display to each side of the current page
  currentPage: number
): (number | string)[] => {
  return useMemo(() => {
    // The fixedItems is determined as firstPage + Dots + pagesAroundCurrentPage + currentPage + siblingCount + Dots + lastPage (each of these is 1)
    const fixedItems = pagesAroundCurrentPage + 5;
    const fixedItemsOnEachSide = 3;
    const firstPage = 1;
    const lastPage = totalCount;

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
      rightSiblingIndex < totalCount - fixedItemsOnEachSide;

    const lastPageIndex = totalCount;

    const ifOnFirstFivePages = !shouldShowLeftDots && shouldShowRightDots;

    if (ifOnFirstFivePages) {
      const leftItemCount = fixedItemsOnEachSide + pagesAroundCurrentPage + 1;
      const leftRange = range(firstPage, leftItemCount);

      return [...leftRange, DOTS, totalCount];
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
  }, [totalCount, pagesAroundCurrentPage, currentPage]);
};
