import constant from "lodash/constant";
import { getImageOrientation } from "./getImageOrientation";

describe("getImageOrientation", () => {
  type OnloadFunction = () => void;
  let onloadRef: OnloadFunction;

  beforeAll(() => {
    Object.defineProperty(Image.prototype, "onload", {
      get(): OnloadFunction {
        //eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this._onload;
      },
      set(onload: OnloadFunction) {
        onloadRef = onload;
        this._onload = onload;
      },
    });
  });

  it("should return landscape", async () => {
    Object.defineProperty(HTMLImageElement.prototype, "naturalHeight", {
      get: constant(100),
    });

    Object.defineProperty(HTMLImageElement.prototype, "naturalWidth", {
      get: constant(200),
    });

    const promise = getImageOrientation("/path-to-image.jpg");
    onloadRef();

    expect(await promise).toBe("landscape");
  });

  it("should return portrait", async () => {
    Object.defineProperty(HTMLImageElement.prototype, "naturalHeight", {
      get: constant(200),
    });

    Object.defineProperty(HTMLImageElement.prototype, "naturalWidth", {
      get: constant(100),
    });

    const promise = getImageOrientation("/path-to-image.jpg");
    onloadRef();

    expect(await promise).toBe("portrait");
  });
});
