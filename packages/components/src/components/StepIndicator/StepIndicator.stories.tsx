import type { ComponentMeta } from "@storybook/react";
import React from "react";
import { Button } from "../Button";
import { Box } from "../../primitives/Box";
import { StepIndicator } from "./StepIndicator";
import { StepIndicatorSegment } from "./StepIndicatorSegment";

export default {
  component: StepIndicator,
  title: "Components/StepIndicator",
} as ComponentMeta<typeof StepIndicator>;

export const Default = (): JSX.Element => {
  return (
    <StepIndicator current={1}>
      <StepIndicatorSegment>Step 1</StepIndicatorSegment>
      <StepIndicatorSegment>Step 2</StepIndicatorSegment>
      <StepIndicatorSegment>Step 3</StepIndicatorSegment>
    </StepIndicator>
  );
};

export const SetCurrentStep = (): JSX.Element => {
  return (
    <StepIndicator current={3}>
      <StepIndicatorSegment>Step 1</StepIndicatorSegment>
      <StepIndicatorSegment>Step 2</StepIndicatorSegment>
      <StepIndicatorSegment>Step 3</StepIndicatorSegment>
      <StepIndicatorSegment>Step 4</StepIndicatorSegment>
      <StepIndicatorSegment>Step 5</StepIndicatorSegment>
    </StepIndicator>
  );
};

export const WithButtons = (): JSX.Element => {
  const [currentStep, setCurrentStep] = React.useState(1);

  return (
    <Box.div alignItems="center" display="flex" gap="space30">
      <Button
        disabled={currentStep === 1}
        onClick={() => setCurrentStep(currentStep - 1)}
        variant="secondary"
      >
        Previous
      </Button>
      <Box.div w="100%">
        <StepIndicator current={currentStep}>
          <StepIndicatorSegment>Step 1</StepIndicatorSegment>
          <StepIndicatorSegment>Step 2</StepIndicatorSegment>
          <StepIndicatorSegment>Step 3</StepIndicatorSegment>
          <StepIndicatorSegment>Step 4</StepIndicatorSegment>
          <StepIndicatorSegment>Step 5</StepIndicatorSegment>
        </StepIndicator>
      </Box.div>
      <Button
        disabled={currentStep === 5}
        onClick={() => setCurrentStep(currentStep + 1)}
        variant="secondary"
      >
        Next
      </Button>
    </Box.div>
  );
};
