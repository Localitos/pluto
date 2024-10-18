import React from "react";
import PropTypes from "prop-types";
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
        gap="d2"
        listStyleType="none"
        margin="m0"
        padding="d0"
        ref={ref}
      >
        {
          // eslint-disable-next-line lodash/prefer-lodash-method
          steps.map((step, index) => (
            <StepIndicatorSegment
              complete={current >= index}
              isActiveStep={current === index}
              key={index}
            >
              {step}
            </StepIndicatorSegment>
          ))
        }
      </Box.ol>
    );
  },
);

StepIndicator.displayName = "StepIndicator";

StepIndicator.propTypes = {
  current: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};

export { StepIndicator };
