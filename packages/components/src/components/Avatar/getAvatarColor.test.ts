import { getAvatarColor } from "./getAvatarColor";

describe("getAvatarColor", () => {
  it("should return a color name from a person's name", () => {
    expect(getAvatarColor("Lisa Wang")).toBe("orange");
    expect(getAvatarColor("Lisa")).toBe("pink");
    expect(getAvatarColor("Jean Knight")).toBe("yellow");
    expect(getAvatarColor("Super Long Name Example")).toBe("yellow");
  });
});
