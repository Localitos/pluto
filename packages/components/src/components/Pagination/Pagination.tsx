import React from "react";
import map from "lodash/map";
import isNaN from "lodash/isNaN";
import { Box } from "../../primitives/Box";
import { Button } from "../Button";
import { PaginationButton } from "./PaginationButton";
import { usePagination } from "./usePagination";

export interface PaginationProps
  extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, "color"> {
  /**
   * The total number of pages.
   */
  pageCount: number;
  /**
   * The currently selected page.
   */
  currentPage: number;
  /**
   * Callback executed when the page is changed.
   */
  onPageChange: (page: number) => void;
  /** The accessible label assigned to the pagination. */
  label?: string;
  /**
   * The number of pages to display to each side of the current page.
   */
  pageNeighbors?: number;
}

/** Pagination lets users navigate through content or a dataset that’s been broken up into multiple pages. */
const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      currentPage,
      label = "Page navigation",
      onPageChange,
      pageCount,
      pageNeighbors = 1,
      ...props
    },
    ref,
  ) => {
    const pages = usePagination(pageCount, pageNeighbors, currentPage);

    const nextPage = () => {
      if (currentPage !== pageCount) onPageChange(currentPage + 1);
    };
    const prevPage = () => {
      if (currentPage >= 1) onPageChange(currentPage - 1);
    };

    return (
      <Box.nav aria-label={label} ref={ref} role="navigation" {...props}>
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
            leadingIcon="chevron-left"
            onClick={prevPage}
            style={{ outlineColor: "colorBorderPrimary" }}
            variant="ghost"
          />
          {map(pages, (page, index) => {
            if (page === "...") {
              return (
                <Box.div
                  display="inline-flex"
                  fontFamily="fontFamilyNotoSans"
                  fontSize="fontSize20"
                  fontWeight="fontWeightMedium"
                  justifyContent="center"
                  key={`${page}-${index}`}
                  paddingBottom="space30"
                  paddingLeft="space30"
                  paddingRight="space30"
                  paddingTop="space30"
                  w="36px"
                >
                  ...
                </Box.div>
              );
            }
            return (
              <PaginationButton
                isCurrentPage={currentPage === Number(page)}
                key={page}
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
            disabled={currentPage === pageCount}
            iconOnly
            leadingIcon="chevron-right"
            onClick={nextPage}
            variant="ghost"
          />
        </Box.ul>
      </Box.nav>
    );
  },
);

Pagination.displayName = "Pagination";

export { Pagination };
