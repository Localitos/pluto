import styled from "@xstyled/styled-components";
import React from "react";
import { Box } from "../../primitives/Box";

type UnOrderedListColorOptions = "colorTextStrongest" | "currentcolor";
type OrderedListMarginOptions = "space0" | "space70";

export interface OrderedListProps
  extends Omit<React.HTMLAttributes<HTMLOListElement>, "color"> {
  /** The list items */
  children: NonNullable<React.ReactNode>;
  /** The color of the list items */
  color?: UnOrderedListColorOptions;
  /** Sets the bottom margin of the ordered list. */
  marginBottom?: OrderedListMarginOptions;
}

/** A list of items with bullet points */
const InnerOrderedList = styled(Box.ol)`
  counter-reset: list-item;

  li {
    position: relative;
    padding-left: space60;
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
  (
    {
      children,
      color = "colorTextStrongest",
      marginBottom = "space70",
      ...props
    },
    ref,
  ) => {
    return (
      <InnerOrderedList
        color={color}
        listStyleType="none"
        marginBottom={marginBottom}
        marginTop="space0"
        paddingLeft="space0"
        ref={ref}
        {...props}
      >
        {children}
      </InnerOrderedList>
    );
  },
);

OrderedList.displayName = "OrderedList";
