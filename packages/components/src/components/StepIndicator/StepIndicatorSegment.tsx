import React from "react";
import PropTypes from "prop-types";
import { VisuallyHidden } from "ariakit/visually-hidden";
import { Box } from "../../primitives/Box";

export interface StepIndicatorSegmentProps
  extends Omit<React.HTMLAttributes<HTMLOListElement>, "color"> {
  /** Shows the step has been completed. */
  complete?: boolean;
  /** The accessible text content of the step. */
  children: string;
  /** Indicates whether a step is active or not. */
  isActiveStep?: boolean;
}

/** The step indicator segment indicates the current step within the StepIndicator. */
const StepIndicatorSegment = React.forwardRef<
  HTMLLIElement,
  StepIndicatorSegmentProps
>(({ complete, children, isActiveStep }, ref) => {
  return (
    <Box.li
      aria-current={isActiveStep}
      backgroundColor={
        isActiveStep || complete
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

StepIndicatorSegment.propTypes = {
  complete: PropTypes.bool,
  children: PropTypes.string.isRequired,
  isActiveStep: PropTypes.bool,
};

export { StepIndicatorSegment };
