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
