const LCA = require("./LCA");

test("should findLCA 1", () => {
  expect(LCA(4, 5)).toBe(2);
});

test("should findLCA 2", () => {
  expect(LCA(4, 6)).toBe(1);
});

test("should findLCA 3", () => {
  expect(LCA(3, 4)).toBe(1);
});

test("should findLCA 4", () => {
  expect(LCA(2, 4)).toBe(2);
});

test("Test missing Node", () => {
    expect(LCA(70, 4)).toBe(-1);
  });
