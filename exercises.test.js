import { capitalize } from "./exercises.js";
import { reverseString } from "./exercises.js";
import { calculator } from "./exercises.js";
import { caesarCipher } from "./exercises.js";

// Capitalize
test("capitalizes first letter in string", () => {
  expect(capitalize("apple")).toBe("Apple");
});

test("capitalizes first letter in string", () => {
  expect(capitalize("orange")).toBe("Orange");
});

// Reverse String
test("reverses a string", () => {
  expect(reverseString("apple")).toBe("elppa");
});

test("reverses a string", () => {
  expect(reverseString("orange")).toBe("egnaro");
});

// Add
test("add two numbers together", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("add two numbers together", () => {
  expect(calculator.add(5, 10)).toBe(15);
});

// Subtract
test("subtract two numbers, return difference", () => {
  expect(calculator.subtract(10, 7)).toBe(3);
});

test("subtract two numbers, return difference", () => {
  expect(calculator.subtract(0, 3)).toBe(-3);
});

// Divide
test("divide two numbers, return quotient", () => {
  expect(calculator.divide(12, 2)).toBe(6);
});

test("divide two numbers, return quotient", () => {
  expect(calculator.divide(72, 9)).toBe(8);
});

// Multiply
test("multiply two numbers, return product", () => {
  expect(calculator.multiply(5, 9)).toBe(45);
});

test("multiply two numbers, return product", () => {
  expect(calculator.multiply(10, 3)).toBe(30);
});

// Caesar Cipher
test("takes a string and a shift factor, returns shifted string", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("takes a string and a shift factor, returns shifted string", () => {
  expect(caesarCipher("abc", -3)).toBe("xyz");
});

test("takes a string and a shift factor, returns shifted string", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("takes a string and a shift factor, returns shifted string", () => {
  expect(caesarCipher("HeLLo", -3)).toBe("EbIIl");
});

test("takes a string with punctuation and a shift factor, returns shifted string", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
