/**
 * Determines how long it takes to prepare a certain juice.
 */

export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;

    case "Energizer":

    case "Green Garden":
      return 1.5;

    case "Tropical Island":
      return 3;

    case "All or Nothing":
      return 5;

    default:
      return 2.5;
  }
}

/**    
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 */

export function limesToCut(wedgesNeeded, limes) {
  let wedgesCut = 0;

  let limesCut = 0;

  let limeValues = limes.reduce((acc, lime) => {
    if (lime === "small") {
      acc.push(6);
    }

    if (lime === "medium") {
      acc.push(8);
    }

    if (lime === "large") {
      acc.push(10);
    }

    return acc;
  }, []);

  while (wedgesCut < wedgesNeeded && limeValues.length > limesCut) {
    wedgesCut += limeValues[limesCut];

    limesCut++;
  }

  return limesCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 */

export function remainingOrders(timeLeft, orders) {
  let timeAvail = timeLeft;

  while (timeAvail > 0) {
    timeAvail -= timeToMixJuice(orders.shift());
  }

  return orders;
}