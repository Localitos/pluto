import type { ComponentMeta } from "@storybook/react";
import React from "react";
import { Button } from "../Button";
import { Box } from "../../primitives/Box";
import { StepIndicator } from "./StepIndicator";

export default {
  component: StepIndicator,
  title: "Components/StepIndicator",
} as ComponentMeta<typeof StepIndicator>;

const threeStepsArray = ["Step 1", "Step 2", "Step 3"];

const fiveStepsArray = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

export const Default = (): JSX.Element => {
  return <StepIndicator current={0} steps={threeStepsArray} />;
};

export const SetCurrentStep = (): JSX.Element => {
  return <StepIndicator current={2} steps={fiveStepsArray} />;
};

export const WithButtons = (): JSX.Element => {
  const [currentStep, setCurrentStep] = React.useState(0);

  return (
    <Box.div alignItems="center" display="flex" gap="space30">
      <Button
        disabled={currentStep === 0}
        onClick={() => setCurrentStep(currentStep - 1)}
        variant="secondary"
      >
        Previous
      </Button>
      <Box.div w="100%">
        <StepIndicator current={currentStep} steps={fiveStepsArray} />
      </Box.div>
      <Button
        disabled={currentStep === 4}
        onClick={() => setCurrentStep(currentStep + 1)}
        variant="secondary"
      >
        Next
      </Button>
    </Box.div>
  );
};
