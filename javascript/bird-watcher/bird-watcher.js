/**
 * Calculates the total bird count.
 */
export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce(
    (previousCount, currentCount) => previousCount + currentCount
  );
}

/**
 * Calculates the total number of birds seen in a specific week.
 */
export function birdsInWeek(birdsPerDay, week) {
  let weekArray = birdsPerDay.filter(
    (count, day) => day >= week * 7 - 7 && day <= week * 7 - 1
  );

  return weekArray.reduce(
    (previousCount, currentCount) => previousCount + currentCount
  );
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i] = birdsPerDay[i] + 1;
    }
  }
  return birdsPerDay;
}
