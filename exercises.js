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

/*
Pseudo:

• Use ASCII values with charCode 97 - 122 (a-z)
• Need to iterate through each char of the string and add new cipher letter to an array
    • With the exception of punctuation - just add this to the array (.,!) etc.
    • Also, spaces are an exception but they need to be included in the array as well
*/

const shiftLowerCase = (charCode, shiftFactor) => {
  const lowerCaseA = "a";
  const lowerCaseZ = "z";

  const lowerCaseACode = lowerCaseA.charCodeAt(0);
  const lowerCaseZCode = lowerCaseZ.charCodeAt(0);

  const shiftedCharCode = charCode + shiftFactor;

  if (shiftedCharCode < lowerCaseACode) {
    const subtractedValue = lowerCaseACode - shiftedCharCode;
    const newLetter = String.fromCharCode(lowerCaseZCode + 1 - subtractedValue);
    return newLetter;
  } else if (shiftedCharCode > lowerCaseZCode) {
    const subtractedValue = shiftedCharCode - lowerCaseZCode;
    const newLetter = String.fromCharCode(lowerCaseACode - 1 + subtractedValue);
    return newLetter;
  } else {
    const newLetter = String.fromCharCode(shiftedCharCode);
    return newLetter;
  }
};

const shiftUpperCase = (charCode, shiftFactor) => {
  const upperCaseA = "A";
  const upperCaseZ = "Z";

  const upperCaseACode = upperCaseA.charCodeAt(0);
  const upperCaseZCode = upperCaseZ.charCodeAt(0);

  const shiftedCharCode = charCode + shiftFactor;

  if (shiftedCharCode < upperCaseACode) {
    const subtractedValue = upperCaseACode - shiftedCharCode;
    const newLetter = String.fromCharCode(upperCaseZCode + 1 - subtractedValue);
    return newLetter;
  } else if (shiftedCharCode > upperCaseZCode) {
    const subtractedValue = shiftedCharCode - upperCaseZCode;
    const newLetter = String.fromCharCode(upperCaseACode - 1 + subtractedValue);
    return newLetter;
  } else {
    const newLetter = String.fromCharCode(shiftedCharCode);
    return newLetter;
  }
};

export function caesarCipher(str, shiftFactor) {
  const newLetterArr = [];

  for (const char of str) {
    const charCode = char.charCodeAt(char); // 120, 121, 122 (final codes in alphabet)

    if (charCode >= 97 && charCode <= 122) {
      const newLetter = shiftLowerCase(charCode, shiftFactor);
      newLetterArr.push(newLetter);
    } else if (charCode >= 65 && charCode <= 90) {
      const newLetter = shiftUpperCase(charCode, shiftFactor);
      newLetterArr.push(newLetter);
    } else {
      newLetterArr.push(char);
    }
  }

  console.log(newLetterArr);
  const newStr = newLetterArr.join("");

  return newStr;
}

/* 
First Draft: 

export function caesarCipher(str, shiftFactor) {
  const newLetterArr = [];

  const lowerCaseA = "a";
  const lowerCaseZ = "z";

  const lowerCaseACode = lowerCaseA.charCodeAt(0);
  const lowerCaseZCode = lowerCaseZ.charCodeAt(0);

  for (const char of str) {
    const charCode = char.charCodeAt(char); // 120, 121, 122 (final codes in alphabet)
    const shiftedCharCode = charCode + shiftFactor; // 123, 124, 125 (wrap to front (97,98, 99))

    if (shiftedCharCode < lowerCaseACode) {
      const subtractedValue = lowerCaseACode - shiftedCharCode;
      const newLetter = String.fromCharCode(
        lowerCaseZCode + 1 - subtractedValue
      );
      newLetterArr.push(newLetter);
    } else if (shiftedCharCode > lowerCaseZCode) {
      const subtractedValue = shiftedCharCode - lowerCaseZCode;
      const newLetter = String.fromCharCode(
        lowerCaseACode - 1 + subtractedValue
      );
      newLetterArr.push(newLetter);
    } else {
      const newLetter = String.fromCharCode(shiftedCharCode);
      newLetterArr.push(newLetter);
    }
  }

  const newStr = newLetterArr.join("");

  return newStr;
}
*/
