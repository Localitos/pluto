import type { ComponentMeta } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { Box } from "../../primitives/Box";
import { ProgressBar } from "./ProgressBar";

export default {
  component: ProgressBar,
  title: "Components/ProgressBar",
} as ComponentMeta<typeof ProgressBar>;

export const Default = (): JSX.Element => (
  <Box.div display="flex" flexDirection="column" gap="space40">
    <ProgressBar value={60} />
  </Box.div>
);

export const Animated = (): JSX.Element => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box.div display="flex" flexDirection="column" gap="space40">
      <ProgressBar value={progress} />
    </Box.div>
  );
};
