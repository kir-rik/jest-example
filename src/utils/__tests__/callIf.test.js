const callIf = require("../callIf");

describe("callIf", () => {
  const getTrue = () => true;
  const getFalse = () => false;

  it("fn called if predicate is true", () => {
    const fn = jest.fn();
    callIf(fn, getTrue);
    expect(fn).toBeCalled();
  });

  it("fn is not called if predicate is false", () => {
    const fn = jest.fn();
    callIf(fn, getFalse);
    expect(fn).not.toBeCalled();
  });
});
