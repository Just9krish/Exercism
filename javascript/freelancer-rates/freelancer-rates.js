export function dayRate(ratePerHour) {
  return 8 * ratePerHour;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

export function priceWithMonthlyDiscount(ratePerHour, days, discount) {
  const months = Math.floor(days / 22);

  const remainder = days % 22;

  return Math.ceil(
    applyDiscount(22 * dayRate(ratePerHour) * months, discount) +
      remainder * dayRate(ratePerHour)
  );
}

export function applyDiscount(value, percentage) {
  return Math.ceil(value * (1 - percentage));
}