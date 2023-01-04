import React from "react";
import { VisuallyHidden } from "ariakit/visually-hidden";
import { Box } from "../../primitives/Box";

export interface StepIndicatorSegmentProps
  extends Omit<React.HTMLAttributes<HTMLOListElement>, "color"> {
  /** The accessible text content of the step. */
  children: string;
  /** The current step that shows the user’s position. Inherited from StepIndicator. */
  current?: number;
  /** The index within the array of segments. Inherited from StepIndicator. */
  index?: number;
}

/** The step indicator segment indicates the current step within the StepIndicator. */
const StepIndicatorSegment = React.forwardRef<
  HTMLLIElement,
  StepIndicatorSegmentProps
>(({ children, current, index = 1 }, ref) => {
  return (
    <Box.li
      aria-current={current === index + 1}
      backgroundColor={
        current === index + 1
          ? "colorBackgroundPrimary"
          : "colorBackgroundStrong"
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
