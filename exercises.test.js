import { capitalize } from "./exercises.js";
import { reverseString } from "./exercises.js";
import { calculator } from "./exercises.js";

test("capitalizes first letter in string", () => {
  expect(capitalize("apple")).toBe("Apple");
});

test("reverses a string", () => {
  expect(reverseString("apple")).toBe("elppa");
});

test("add two numbers together", () => {
  expect(calculator.add(2, 3)).toBe(5);
});
