import React from "react";
import { Box } from "../../primitives/Box";
import type { StepIndicatorSegmentProps } from "./StepIndicatorSegment";

export interface StepIndicatorProps
  extends Omit<React.HTMLAttributes<HTMLOListElement>, "color"> {
  /** The step progress indicators: StepIndicatorSegment. */
  children: NonNullable<React.ReactNode>;
  /** The current step that shows the user’s position. */
  current: number;
}

/** The step indicator can be used to show the user s position in and progress through a multi step process. */
const StepIndicator = React.forwardRef<HTMLOListElement, StepIndicatorProps>(
  ({ children, current = 1 }, ref) => {
    const validChildren = React.useMemo(() => {
      // eslint-disable-next-line lodash/prefer-lodash-method
      return React.Children.map(children, (child, index) => {
        if (React.isValidElement<StepIndicatorSegmentProps>(child)) {
          return React.cloneElement(child, {
            current,
            index,
          });
        }
        return null;
      });
    }, [children, current]);

    return (
      <Box.ol
        alignItems="center"
        aria-label="progress"
        display="flex"
        gap="space30"
        listStyleType="none"
        margin="space0"
        padding="space0"
        ref={ref}
      >
        {validChildren}
      </Box.ol>
    );
  }
);

StepIndicator.displayName = "StepIndicator";

export { StepIndicator };
