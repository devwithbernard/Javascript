// const test = require("@jest/globals");
// const describe = require("@jest/globals");
// const expect = require("@jest/globals");
const sum = require("./sum");

// test("adds two numbers", () => {
//     expect(sum(1,2)).toBe(3);
// })
describe("sum module", () => {
    const makeTest = (x, y) => {
        let expected = x + y;
        test(`adds ${x} + ${y} to equal ${expected}`, () => {
            expect(
                sum(x, y)
            ).toBe(x + y);
        })
    }

    for (let i = 0; i <= 4; i++) {
        let x = i;
        let y = i + 1;
        makeTest(x, y);
    }
})
