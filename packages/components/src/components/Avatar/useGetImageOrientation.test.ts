import { renderHook, waitFor } from "@testing-library/react";
import * as imageOrientation from "./getImageOrientation";
import { useGetImageOrientation } from "./useGetImageOrientation";

describe("useGetImageOrientation", () => {
  it("should return the image orientation", async () => {
    jest
      .spyOn(imageOrientation, "getImageOrientation")
      .mockResolvedValue("portrait");
    const { result } = renderHook(() =>
      useGetImageOrientation("/path-to-file.jpg"),
    );

    expect(result.current.hasError).toBeFalsy();

    await waitFor(() => {
      expect(result.current.orientation).toBe("portrait");
    });
  });

  it("should return error", async () => {
    jest.spyOn(imageOrientation, "getImageOrientation").mockRejectedValue(null);
    const { result } = renderHook(() =>
      useGetImageOrientation("/path-to-file.jpg"),
    );

    expect(result.current.orientation).toBeUndefined();

    await waitFor(() => {
      expect(result.current.hasError).toBeTruthy();
    });
  });
});
