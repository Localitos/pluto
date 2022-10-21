import { renderHook } from "@testing-library/react-hooks";
import * as imageOrientation from "./getImageOrientation";
import { useGetImageOrientation } from "./useGetImageOrientation";

describe("useGetImageOrientation", () => {
  it("should return the image orientation", async () => {
    jest
      .spyOn(imageOrientation, "getImageOrientation")
      .mockResolvedValue("portrait");
    const { result, waitForNextUpdate } = renderHook(() =>
      useGetImageOrientation("/path-to-file.jpg")
    );

    await waitForNextUpdate();

    expect(result.current.orientation).toBe("portrait");
    expect(result.current.hasError).toBeFalsy();
  });

  it("should return error", async () => {
    jest.spyOn(imageOrientation, "getImageOrientation").mockRejectedValue(null);
    const { result, waitForNextUpdate } = renderHook(() =>
      useGetImageOrientation("/path-to-file.jpg")
    );

    await waitForNextUpdate();

    expect(result.current.orientation).toBeUndefined();
    expect(result.current.hasError).toBeTruthy();
  });
});
