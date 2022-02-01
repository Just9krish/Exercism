/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 */
 export function needsLicense(kind) {
  return kind === 'car' || kind === 'truck' || false;
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 */
export function chooseVehicle(option1, option2) {
  let choice = option1 < option2 ? option1 : option2;
  return `${choice} is clearly the better choice.`;
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 */
export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.8;
  } else if (age > 10) {
    return originalPrice * 0.5;
  } else {
    return originalPrice * 0.7;
  }
}
