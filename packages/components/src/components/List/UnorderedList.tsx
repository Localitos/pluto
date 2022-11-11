import styled from "@xstyled/styled-components";
import React from "react";
import { Box } from "../../primitives/Box";

export interface UnorderedListProps
  extends Omit<React.HTMLAttributes<HTMLUListElement>, "color"> {
  /** The list items */
  children: NonNullable<React.ReactNode>;
}

/** A list of items with bullet points */
const InnerUnorderedList = styled(Box.ul)`
  li {
    position: relative;
    padding-left: space50;

    &::before {
      content: "•";
      position: absolute;
      font-size: fontSize50;
      line-height: 0.9rem;
      font-weight: fontWeightBold;
      left: 0;
      top: 0;
    }
  }
`;

export const UnorderedList = React.forwardRef<
  HTMLUListElement,
  UnorderedListProps
>(({ children, ...props }, ref) => {
  return (
    <InnerUnorderedList listStylePosition="inside" ref={ref} {...props}>
      {children}
    </InnerUnorderedList>
  );
});

UnorderedList.displayName = "UnorderedList";
