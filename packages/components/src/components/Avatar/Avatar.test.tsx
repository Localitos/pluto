import { render, screen } from "@testing-library/react";
import React from "react";
import { Avatar } from "./Avatar";
import * as imageOrientation from "./getImageOrientation";

describe("<Avatar />", () => {
  describe("when the src is not provided", () => {
    it("should render initials", async () => {
      render(<Avatar name="Lisa Wang" />);

      const initials = await screen.findByText("LW");
      expect(initials).toBeInTheDocument();
      expect(initials).toHaveAttribute("aria-hidden");
    });

    it("should render label", async () => {
      render(<Avatar name="Lisa Wang" />);

      expect(await screen.findByLabelText("Lisa Wang")).toBeInTheDocument();
    });
  });

  it("should render name", async () => {
    render(<Avatar name="Lisa Wang" showName />);

    expect(await screen.findByText("Lisa Wang")).toBeInTheDocument();
  });

  describe("when the src is provided", () => {
    it("should render image", async () => {
      jest
        .spyOn(imageOrientation, "getImageOrientation")
        .mockResolvedValue("portrait");

      render(<Avatar name="Lisa Wang" src="path-to-image.jpg" />);

      const image = await screen.findByAltText("Lisa Wang");
      expect(image).toHaveProperty(
        "src",
        expect.stringContaining("path-to-image.jpg"),
      );
    });

    it("should render initials if the image can't be loaded", async () => {
      jest
        .spyOn(imageOrientation, "getImageOrientation")
        .mockRejectedValue(undefined);

      render(<Avatar name="Lisa Wang" src="path-to-image.jpg" />);

      const initials = await screen.findByText("LW");
      expect(initials).toBeInTheDocument();
      expect(initials).toHaveAttribute("aria-hidden");
    });
  });

  it("should allow for global html attributes", () => {
    render(<Avatar aria-label="foo" data-testid="bar" name="Name" />);

    expect(screen.getByTestId("bar")).toBeInTheDocument();
    expect(screen.getByLabelText("foo")).toBeInTheDocument();
  });
});
