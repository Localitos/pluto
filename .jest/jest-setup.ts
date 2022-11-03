import "@testing-library/jest-dom";

type JestToErrorArg = Parameters<
  jest.Matchers<unknown, () => unknown>["toThrow"]
>[0];

const matchers = {
  /**
   * Event with a test pass using the .toThrow expectation
   * the stack trace of the error appears.
   * This matcher helps to test an expection without
   * the cosole error message.
   */
  toThrowSilently(
    this: jest.MatcherContext,
    received: () => unknown,
    expected?: JestToErrorArg
  ) {
    const spy = jest.spyOn(console, "error");
    spy.mockImplementation(() => {});

    if (this.isNot) {
      expect(received).not.toThrow(expected);
    } else {
      expect(received).toThrow(expected);
    }

    spy.mockRestore();

    return {
      pass: !this.isNot,
      message: () => "Received function did not throw",
    };
  },
};

expect.extend(matchers);
