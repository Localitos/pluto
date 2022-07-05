import React from 'react';

export type SampleProps = {
  label: string;
};

export const Sample = ({ label }: SampleProps) => (
  <div className="tw-bg-[#fcddaa] tw-text-white tw-p-4 tw-rounded-md">{label}</div>
);
