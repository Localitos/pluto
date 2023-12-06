import { getFileRestrictionText } from "./getFileRestrictionText";

describe("getFileRestrictionText", () => {
  it("returns file size text if passed as parameter", () => {
    expect(getFileRestrictionText({}, 1, 3 * 1024 * 1024)).toBe(
      "You can upload 1 file. File must be no larger than 3MB.",
    );
  });

  it("returns file type text if passed as parameter", () => {
    expect(getFileRestrictionText({ "image/jpeg": [".jpg"] }, 1)).toBe(
      "You can upload 1 file. File must be JPG format",
    );

    expect(
      getFileRestrictionText(
        {
          "image/jpeg": [".jpg", ".jpeg"],
          "application/pdf": [".pdf"],
        },
        1,
      ),
    ).toBe("You can upload 1 file. File must be JPG, JPEG, PDF format");
  });

  it("returns file type and size text if passed as parameter", () => {
    expect(
      getFileRestrictionText({ "image/jpeg": [".jpg"] }, 1, 3 * 1024 * 1024),
    ).toBe(
      "You can upload 1 file. File must be JPG format, no larger than 3MB.",
    );
  });

  it("returns correct text if file size limit is less than 1mb", () => {
    expect(
      getFileRestrictionText({ "image/jpeg": [".jpg"] }, 1, 500 * 1024),
    ).toBe(
      "You can upload 1 file. File must be JPG format, no larger than 500KB.",
    );
  });
});
