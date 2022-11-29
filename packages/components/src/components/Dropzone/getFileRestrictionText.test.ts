import { getFileRestrictionText } from "./getFileRestrictionText";

describe("getFileRestrictionText", () => {
  it("returns nothing with no restrictions passed", () => {
    expect(getFileRestrictionText({})).toBeUndefined();
  });

  it("returns file size text if passed as parameter", () => {
    expect(getFileRestrictionText({}, 3 * 1024 * 1024)).toBe(
      "File must be no larger than 3MB"
    );
  });

  it("returns file type text if passed as parameter", () => {
    expect(getFileRestrictionText({ "image/jpeg": [".jpg"] })).toBe(
      "File must be JPG format"
    );

    expect(
      getFileRestrictionText({
        "image/jpeg": [".jpg", ".jpeg"],
        "application/pdf": [".pdf"],
      })
    ).toBe("File must be JPG, JPEG, PDF format");
  });

  it("returns file type and size text if passed as parameter", () => {
    expect(
      getFileRestrictionText({ "image/jpeg": [".jpg"] }, 3 * 1024 * 1024)
    ).toBe("File must be JPG format and no larger than 3MB");
  });
});
