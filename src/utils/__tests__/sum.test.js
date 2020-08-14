const sum = require('../sum');

describe("sum", () => {
  test("positive numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("negative numbers", () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  test("add zero", () => {
    expect(sum(1, 0)).toBe(1);
  });  
  
  test("floats", () => {
    expect(sum(0.1, 0.2)).toBe(0.3);
  });

  test("not a number", () => {
    expect(sum(1, '2')).toBe(NaN);
    expect(sum('1', 2)).toBe(NaN);
    expect(sum(1, NaN)).toBe(NaN);
  })
});
