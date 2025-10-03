import { capitalize } from "./exercises.js";
import { reverseString } from "./exercises.js";

test("capitalizes first letter in string", () => {
  expect(capitalize("apple")).toBe("Apple");
});

test("reverses a string", () => {
  expect(reverseString("apple")).toBe("elppa");
});
