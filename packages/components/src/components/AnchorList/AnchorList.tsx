import React, { ReactElement } from "react";
import { Box } from "../../primitives/Box";
import { AnchorProps } from "../Anchor/Anchor";

type AnchorListProps = {
  /** An `Anchor` or a list of `Anchor` components */
  children:
    NonNullable<Array<ReactElement<AnchorProps>>> | NonNullable<ReactElement<AnchorProps>>;
};

/** An `AnchorList` is a list which display a list of `Anchor` */
const AnchorList = React.forwardRef<HTMLUListElement, AnchorListProps>(
  ({ children }, ref) => {
    return (
      <Box.ul ref={ref}>
        {
          // eslint-disable-next-line lodash/prefer-lodash-method
          React.Children.map(children, (child) => (
            <Box.li display="flex" gap="space20">
              <Box.span
                alignItems="center"
                display="flex"
                h="16px"
                justifyContent="center"
                w="16px"
              >
                <Box.span
                  backgroundColor="colorIconInfo"
                  borderRadius="borderRadiusCircle"
                  display="block"
                  h="3px"
                  w="3px"
                />
              </Box.span>
              {child}
            </Box.li>
          ))
        }
      </Box.ul>
    );
  }
);

AnchorList.displayName = "AnchorList";

export { AnchorList };
