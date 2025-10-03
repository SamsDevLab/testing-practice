export function capitalize(str) {
  const firstLetter = str.charAt(0).toUpperCase();
  const slicedStr = str.slice(1);
  const newStr = firstLetter.concat(slicedStr);

  return newStr;
}

export function reverseString(str) {
  const reversedStr = str.split("").reverse().join("");

  return reversedStr;
}

export const calculator = {
  add: (num1, num2) => {
    const sum = num1 + num2;
    return sum;
  },
  subtract: (num1, num2) => {
    const difference = num1 - num2;
    return difference;
  },
  divide: (num1, num2) => {
    const quotient = num1 / num2;
    return quotient;
  },
};
