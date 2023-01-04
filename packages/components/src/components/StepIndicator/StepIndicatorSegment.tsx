import React from "react";
import { VisuallyHidden } from "ariakit/visually-hidden";
import { Box } from "../../primitives/Box";

export interface StepIndicatorSegmentProps
  extends Omit<React.HTMLAttributes<HTMLOListElement>, "color"> {
  /** The accessible text content of the step. */
  children: string;
  /** Indicates whether a step is active or not. */
  isActiveStep?: boolean;
}

/** The step indicator segment indicates the current step within the StepIndicator. */
const StepIndicatorSegment = React.forwardRef<
  HTMLLIElement,
  StepIndicatorSegmentProps
>(({ children, isActiveStep }, ref) => {
  return (
    <Box.li
      aria-current={isActiveStep}
      backgroundColor={
        isActiveStep ? "colorBackgroundPrimary" : "colorBackgroundStrong"
      }
      borderRadius="borderRadius30"
      flexGrow={1}
      h="4px"
      ref={ref}
    >
      <VisuallyHidden>{children}</VisuallyHidden>
    </Box.li>
  );
});

StepIndicatorSegment.displayName = "StepIndicatorSegment";

export { StepIndicatorSegment };
