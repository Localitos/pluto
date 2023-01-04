import React from "react";
import { Box } from "../../primitives/Box";
import { StepIndicatorSegment } from "./StepIndicatorSegment";

export interface StepIndicatorProps
  extends Omit<React.HTMLAttributes<HTMLOListElement>, "color"> {
  /** The current step that shows the user’s position. Start with 0. */
  current: number;
  /** The steps that are part of a multi step process. Each string should describe each step in an accessible way. */
  steps: string[];
}

/** The step indicator can be used to show the user's progress through a multi step process. */
const StepIndicator = React.forwardRef<HTMLOListElement, StepIndicatorProps>(
  ({ current = 0, steps }, ref) => {
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
        {
          // eslint-disable-next-line lodash/prefer-lodash-method
          steps.map((step, index) => (
            <StepIndicatorSegment isActiveStep={current === index} key={index}>
              {step}
            </StepIndicatorSegment>
          ))
        }
      </Box.ol>
    );
  }
);

StepIndicator.displayName = "StepIndicator";

export { StepIndicator };
