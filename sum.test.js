import sum from "./sum.js";

describe("test for sum fun", () => {
    test("add 2 + 2 to equals 4", () => {
        expect(sum(2, 2)).toBe(4);
    });

     test("add -5 + -5 to equals -10", () => {
        expect(sum(-5, -5)).toBe(-10);
    });
})
