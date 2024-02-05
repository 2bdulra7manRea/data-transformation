const { aggregateObjects } = require("../helpers");

describe("aggregateObjects function", () => {
  it("should aggregate objects correctly", () => {
    const arrayOfObjects = [
      { a: 1, b: 2 },
      { a: 2, b: 3 },
      { a: 3, b: 4 },
    ];

    const result = aggregateObjects(arrayOfObjects);

    expect(result).toEqual({ a: 6, b: 9 });
  });
});
