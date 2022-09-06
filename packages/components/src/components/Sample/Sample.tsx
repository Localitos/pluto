import React from "react";

export type SampleProps = {
  label: string;
};

export const Sample = ({ label }: SampleProps): JSX.Element => (
  <div>{label}</div>
);
