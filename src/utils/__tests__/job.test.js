const job = require("../job");

describe("job", () => {
  jest.useFakeTimers();
  it("fn is called after time", () => {
    const fn = jest.fn();
    job(fn);

    expect(fn).not.toBeCalled();

    jest.runAllTimers();

    expect(fn).toBeCalled();
  });
});
