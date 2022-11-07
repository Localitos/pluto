import React from "react";
import { Box } from "../../primitives/Box";
import { Text } from "../../primitives/Text";

export interface ModalSubHeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color"> {
  /** The contents of the modal sub heading. */
  children: NonNullable<React.ReactNode>;
}

/** The subheading of the modal. */
const ModalSubHeading = React.forwardRef<
  HTMLHeadingElement,
  ModalSubHeadingProps
>(({ children, ...props }, ref) => {
  return (
    <Box.div marginTop="space10">
      <Text.h3
        color="colorText"
        fontFamily="fontFamilyModerat"
        fontSize="fontSize20"
        fontWeight="fontWeightRegular"
        lineHeight="lineHeight20"
        ref={ref}
        {...props}
      >
        {children}
      </Text.h3>
    </Box.div>
  );
});

ModalSubHeading.displayName = "ModalSubHeading";

export { ModalSubHeading };
