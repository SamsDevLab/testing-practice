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
  multiply: (num1, num2) => {
    const product = num1 * num2;
    return product;
  },
};

const getBaseNum = (charCode) => {
  if (charCode >= 97 && charCode <= 122) {
    return 97;
  } else if (charCode >= 65 && charCode <= 90) {
    return 65;
  } else return null;
};

const shiftNum = (charCode, shiftFactor, baseNum) => {
  const modulus = 26;

  const workingNum = charCode - baseNum;

  const shiftedNum =
    ((((workingNum + shiftFactor) % modulus) + modulus) % modulus) + baseNum;

  const newLetter = String.fromCharCode(shiftedNum);

  return newLetter;
};

export function caesarCipher(str, shiftFactor) {
  const newLetterArr = [];

  for (const char of str) {
    const charCode = char.charCodeAt(char);

    const baseNum = getBaseNum(charCode);

    if (baseNum === null) {
      newLetterArr.push(char);
    } else {
      const newLetter = shiftNum(charCode, shiftFactor, baseNum);
      newLetterArr.push(newLetter);
    }
  }

  const newStr = newLetterArr.join("");

  return newStr;
}
