import { useMemo } from "react";
import range from "lodash/range";

const DOTS = "...";
// SIDE_COUNT is used to calculate how many page neighbors there are outside the current page
const SIDE_COUNT = 2;
// These are extra blocks to make the total blocks add up to seven
const ADDITIONAL_BLOCK_COUNT = 2;
// This helps to determine the total blocks
const ACCOUNT_FOR_CURRENT_PAGE = 1;
// These are the blocks of the first and last page that are always displayed
const FIXED_BLOCK_COUNT = 2;
// This adds an additional number to lodash range calculations
const LODASH_OFFSET = 1;

/* This hook generates an array that calculates where to put the dots depending on the current page and the number of pages */
export const usePagination = (
  pageCount: number,
  pageNeighbors: number, // The number of pages to display to each side of the current page
  currentPage: number
): (number | string)[] => {
  return useMemo(() => {
    // The dynamic block count changes based on the pageNeighbors prop
    const dynamicBlockCount =
      pageNeighbors * SIDE_COUNT +
      ACCOUNT_FOR_CURRENT_PAGE +
      ADDITIONAL_BLOCK_COUNT;

    // This is the total number of blocks that are displayed in the pagination component (without the arrows)
    const totalBlocks = dynamicBlockCount + FIXED_BLOCK_COUNT;

    if (pageCount > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - pageNeighbors;
      const rightBound = currentPage + pageNeighbors;
      const beforeLastPage = pageCount - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage + LODASH_OFFSET);

      const pagesCount = pages.length;
      const singleSpillOffset = dynamicBlockCount - pagesCount - 1;

      const shouldDotsShowOnLeft = startPage > 2;
      const shouldDotsShowOnRight = endPage < beforeLastPage;

      if (shouldDotsShowOnLeft && !shouldDotsShowOnRight) {
        const extraPages = range(startPage - singleSpillOffset, startPage);
        pages = [DOTS, ...extraPages, ...pages];
      } else if (!shouldDotsShowOnLeft && shouldDotsShowOnRight) {
        const extraPages = range(
          endPage + 1,
          endPage + singleSpillOffset + LODASH_OFFSET
        );
        pages = [...pages, ...extraPages, DOTS];
      } else if (shouldDotsShowOnLeft && shouldDotsShowOnRight) {
        pages = [DOTS, ...pages, DOTS];
      }

      return [1, ...pages, pageCount];
    }

    return range(1, pageCount + LODASH_OFFSET);
  }, [pageCount, pageNeighbors, currentPage]);
};
