import { getInitials } from "./getInitials";

describe("getInitials", () => {
  it("should return the initial when pass only one word", async () => {
    const initials = getInitials("Lisa");

    expect(initials).toBe("L");
  });

  it("should return the initials from first and last words when pass two words", async () => {
    const initials = getInitials("Lisa Wang");

    expect(initials).toBe("LW");
  });

  it("should return the initials from first and last words when pass more than two words", async () => {
    const initials = getInitials("Lisa Middle Name Wang");

    expect(initials).toBe("LW");
  });
});
