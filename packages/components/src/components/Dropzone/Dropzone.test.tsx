import { render } from "@testing-library/react";
import React from "react";
import { Dropzone } from "./Dropzone";

describe("<Dropzone />", () => {
  it("renders correctly", () => {
    render(<Dropzone />);
  });
});
