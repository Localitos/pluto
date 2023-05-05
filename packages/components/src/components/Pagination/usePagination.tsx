import React, { useMemo } from "react";

const DOTS = "...";

const range = (start: number, end: number): string[] => {
  const length = end - start + 1;
  // console.log("lenght", length);
  return Array.from({ length }, (_, idx) => `${idx + start}`);
};

export const usePagination = (
  totalCount: number,
  siblingCount = 1,
  currentPage: number
): (number | string)[] => {
  return useMemo(() => {
    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const fixedItems = siblingCount + 5;
    const fixedItemsOnEachSide = 3;
    const totalSibilings = 2 * siblingCount;
    const firstPage = 1;
    const lastPage = totalCount;

    /*
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (fixedItems >= lastPage) {
      return range(firstPage, lastPage);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, firstPage);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, lastPage);

    /*
      We do not want to show dots if there is only one position left 
      after/before the left/right page count as that would lead to a change if our Pagination
      component size which we do not want
    */
    const shouldShowLeftDots = leftSiblingIndex >= 5;
    console.log("---------------");
    console.log("leftSiblingIndex", leftSiblingIndex);
    console.log("currentPage", currentPage);
    // console.log("rightSiblingIndex", rightSiblingIndex, shouldShowLeftDots);
    // console.log("shouldShowRightDots", totalCount - fixedItemsOnEachSide);
    const shouldShowRightDots =
      rightSiblingIndex < totalCount - fixedItemsOnEachSide;

    const lastPageIndex = totalCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = fixedItemsOnEachSide + siblingCount + 1;
      const leftRange = range(firstPage, leftItemCount);

      console.log("leftItemCount", leftItemCount);
      console.log("leftRange", leftRange);
      return [...leftRange, DOTS, totalCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = fixedItemsOnEachSide + siblingCount;
      const rightRange = range(lastPage - rightItemCount, lastPage);
      return [firstPage, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPage, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return [];
  }, [totalCount, siblingCount, currentPage]);
};
