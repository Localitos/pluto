import { useMemo } from "react";

const DOTS = "...";

// Calculates the numbers to display between two numbers
const range = (from: number, to: number, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

/* This hook generates an array that calculates where to put the dots depending on the current page and the number of pages */
export const usePagination = (
  totalPages: number,
  pageNeighbors: number, // The number of pages to display to each side of the current page
  currentPage: number
): (number | string)[] => {
  return useMemo(() => {
    // This is how many numbers to display on the left or right side (the default is 5 because pageNeighbors default is 1)
    const totalNumbers = pageNeighbors * 2 + 3;
    // This is how many total blocks/segments there will be in the pagination component without the arrow buttons (default is 7)
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - pageNeighbors;
      const rightBound = currentPage + pageNeighbors;
      const beforeLastPage = totalPages - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      const pagesCount = pages.length;
      const singleSpillOffset = totalNumbers - pagesCount - 1;

      const leftSpill = startPage > 2;
      const rightSpill = endPage < beforeLastPage;

      const leftSpillPage = DOTS;
      const rightSpillPage = DOTS;

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1);
        pages = [leftSpillPage, ...extraPages, ...pages];
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset);
        pages = [...pages, ...extraPages, rightSpillPage];
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage];
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  }, [totalPages, pageNeighbors, currentPage]);
};
