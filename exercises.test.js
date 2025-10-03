import { capitalize } from "./exercises.js";

test("capitalizes first letter in string", () => {
  expect(capitalize("apple")).toBe("Apple");
});

test("capitalizes first letter in string", () => {
  expect(capitalize("pear")).toBe("Pear");
});
