import React from "react";
import map from "lodash/map";
import isNaN from "lodash/isNaN";
import { Box } from "../../primitives/Box";
import { Button } from "../Button";
import { PaginationButton } from "./PaginationButton";
import { usePagination } from "./usePagination";

export interface PaginationProps
  extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, "color"> {
  /** The accessible label assigned to the pagination. */
  // Label: string;
  /**
   * The total number of pages.
   */
  totalPages: number;
  /**
   * The currently selected page.
   */
  currentPage: number;
  /**
   * Callback fired when the page is changed.
   */
  onPageChange: (page: number) => void;
}

/** Pagination lets users navigate through content or a dataset that’s been broken up into multiple pages. */
const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  ({ currentPage, onPageChange, totalPages, ...props }, ref) => {
    const pages = usePagination(totalPages, 1, currentPage);

    const nextPage = () => {
      if (currentPage !== totalPages) onPageChange(currentPage + 1);
    };
    const prevPage = () => {
      if (currentPage >= 1) onPageChange(currentPage - 1);
    };

    return (
      <Box.nav
        aria-label="Pagination Navigation"
        ref={ref}
        role="navigation"
        {...props}
      >
        <Box.ul
          alignItems="center"
          display="flex"
          gap="space30"
          listStyleType="none"
          margin="space0"
          padding="space0"
        >
          <Button
            aria-label="Previous page"
            disabled={currentPage === 1}
            iconOnly
            leadingIcon="ChevronLeftIcon"
            onClick={prevPage}
            style={{ outlineColor: "colorBorderPrimary" }}
            variant="ghost"
          />
          {map(pages, (page, index) => {
            return (
              <PaginationButton
                isCurrentPage={currentPage === Number(page)}
                key={index}
                onClick={() =>
                  !isNaN(Number(page)) && onPageChange(Number(page))
                }
                page={Number(page)}
              >
                {page}
              </PaginationButton>
            );
          })}
          <Button
            aria-label="Next page"
            disabled={currentPage === totalPages}
            iconOnly
            leadingIcon="ChevronRightIcon"
            onClick={nextPage}
            variant="ghost"
          />
        </Box.ul>
      </Box.nav>
    );
  }
);

Pagination.displayName = "Pagination";

export { Pagination };
