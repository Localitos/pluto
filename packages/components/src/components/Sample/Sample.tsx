import React from "react";

export type SampleProps = {
  label: string;
};

export const Sample = ({ label }: SampleProps): JSX.Element => (
  <div className="tw-bg-[#fceeaa] tw-text-white tw-p-4 tw-rounded-md">
    {label}
  </div>
);
