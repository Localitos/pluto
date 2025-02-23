import { styled } from "@xstyled/styled-components";
import React from "react";
import { Box, BoxProps } from "../../primitives/Box";

export interface OrderedListProps
  extends Omit<React.HTMLAttributes<HTMLOListElement>, "color">,
    BoxProps {
  /** The list items */
  children: NonNullable<React.ReactNode>;
}

/** A list of items with bullet points */
const InnerOrderedList = styled(Box.ol)`
  counter-reset: list-item;

  li {
    position: relative;
    padding-left: d5;
    counter-increment: list-item;

    &::before {
      content: counter(list-item) ".";
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`;

/** A list of numbered items */
export const OrderedList = React.forwardRef<HTMLOListElement, OrderedListProps>(
  ({ children, ...props }, ref) => {
    return (
      <InnerOrderedList
        color="colorTextStrongest"
        listStyleType="none"
        marginBottom="d6"
        marginTop="m0"
        paddingLeft="p0"
        ref={ref}
        {...props}
      >
        {children}
      </InnerOrderedList>
    );
  },
);

OrderedList.displayName = "OrderedList";
