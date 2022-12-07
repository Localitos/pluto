import { getFileRestrictionText } from "./getFileRestrictionText";

describe("getFileRestrictionText", () => {
  it("returns file size text if passed as parameter", () => {
    expect(getFileRestrictionText({}, 1, 3 * 1024 * 1024)).toBe(
      "File must be no larger than 3MB, and you can upload only 1 file."
    );
  });

  it("returns file type text if passed as parameter", () => {
    expect(getFileRestrictionText({ "image/jpeg": [".jpg"] }, 1)).toBe(
      "File must be JPG format, and you can upload only 1 file."
    );

    expect(
      getFileRestrictionText(
        {
          "image/jpeg": [".jpg", ".jpeg"],
          "application/pdf": [".pdf"],
        },
        1
      )
    ).toBe(
      "File must be JPG, JPEG, PDF format, and you can upload only 1 file."
    );
  });

  it("returns file type and size text if passed as parameter", () => {
    expect(
      getFileRestrictionText({ "image/jpeg": [".jpg"] }, 1, 3 * 1024 * 1024)
    ).toBe(
      "File must be JPG format, no larger than 3MB, and you can upload only 1 file."
    );
  });
});
