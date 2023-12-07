describe("test de la fonction pow", () => {
    function makeTest(x) {
        let expectedResult = x * x * x;

        it(`${x} in the power 3 is ${expectedResult}`, () => {
            assert.equal(pow(x, 3), expectedResult);
        })
    }

    for (let x = 1; x <= 5; x++) {
        makeTest(x);
    }
})