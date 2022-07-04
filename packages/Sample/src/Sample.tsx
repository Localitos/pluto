import React from 'react';

export type SampleProps = {};

export const Sample = ({ ...props }: SampleProps) => (
  <div className="tw-bg-blue-500 tw-text-white tw-p-4 tw-rounded-md">
    This is a sample component
  </div>
);
