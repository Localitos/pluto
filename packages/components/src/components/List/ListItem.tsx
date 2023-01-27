import React, { ReactNode } from "react";
import { Box } from "../../primitives/Box";

export interface ListItemProps
  extends Omit<React.HTMLAttributes<HTMLLIElement>, "color"> {
  /** The contents of the `li`. Can be text or valid text related HTML, i.e. anchor and strong elements. */
  children: NonNullable<ReactNode>;
}

/** An item that is used inside a `List` */
export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, ...props }, ref) => (
    <Box.li
      marginBottom={{ _: "space30", last: "space0" }}
      {...props}
      ref={ref}
    >
      {children}
    </Box.li>
  )
);

ListItem.displayName = "ListItem";
