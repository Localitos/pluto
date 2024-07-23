import styled from "@xstyled/styled-components";
import React from "react";
import { Box, BoxProps } from "../../primitives/Box";

export interface UnorderedListProps extends BoxProps {
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
      line-height: 1rem;
      font-weight: fontWeightBold;
      left: 0;
      top: 0;
    }
  }
`;

export const UnorderedList = React.forwardRef<
  HTMLUListElement,
  UnorderedListProps
>(
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
      <InnerUnorderedList
        color={color}
        listStylePosition="inside"
        listStyleType="none"
        marginBottom={marginBottom}
        marginTop="m0"
        paddingLeft="space0"
        ref={ref}
        {...props}
      >
        {children}
      </InnerUnorderedList>
    );
  },
);

UnorderedList.displayName = "UnorderedList";
