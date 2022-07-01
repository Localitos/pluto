import React from "react";

type Props = {
  label: string
}

export const Sample = ({ label }: Props) => {
  return <button>{label}</button>;
};
