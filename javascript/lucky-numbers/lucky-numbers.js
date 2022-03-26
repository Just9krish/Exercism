/**
 * Calculates the sum of the two input arrays.
 */
export function twoSum(array1, array2) {
  let a = array1.join("");
  let b = array2.join("");

  return Number(a) + Number(b);
}

/**
 * Checks whether a number is a palindrome.
 */
export function luckyNumber(value) {
  let stringValue = String(value);
  let arrayValue = stringValue.split("");
  let reverseArray = arrayValue.reverse();

  return stringValue === reverseArray.join("");
}

/**
 * Determines the error message that should be shown to the user
 */
export function errorMessage(input) {
  let result = "";

  if (input === null || input === undefined || input === "") {
    result = "Required field";
  } else if (
    Number(input) === NaN ||
    Number(input) === "" ||
    Number(input) === 0 ||
    !Number(input)
  ) {
    result = "Must be a number besides 0";
  }

  return result;
}
