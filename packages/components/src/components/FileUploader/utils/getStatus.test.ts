import { getStatus } from "./getStatus";

describe("getStatus", () => {
  it("returns loading if not disabled and progress is between 1 and 99", () => {
    const result = getStatus({ progress: 60 });
    expect(result).toMatch("loading");
  });

  it("returns success if not loading and with fileURL", () => {
    const result = getStatus({ progress: 100, fileUrl: "file123" });
    expect(result).toMatch("success");
  });

  it("returns error if not loading or success and with errorMessage", () => {
    const result = getStatus({ progress: 100, errorMessage: "An error" });
    expect(result).toMatch("error");
  });

  it("returns waiting if not loading, success or error", () => {
    const result = getStatus({ progress: 0 });
    expect(result).toMatch("waiting");
  });
});
