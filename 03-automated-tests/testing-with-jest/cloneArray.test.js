const cloneArray = require("./cloneArray");

const numbers = [1, 2, 3];
test("clone Array module: ", () => {
    expect(
        cloneArray(numbers)
    ).toEqual(numbers);
});

test("not to be the same array in memory address", () => {
    expect(
        cloneArray(numbers)
    ).not.toBe(numbers);
});