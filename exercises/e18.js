import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
    const rockInfo = data.asteroids
    let asteroidArray = {};
  for(let item = 0; item < rockInfo.length; item++ ) {
    let currYear = rockInfo[item].discoveryYear
    if (!asteroidArray[currYear]) {
      asteroidArray[currYear] = 0;
    }
    asteroidArray[currYear]++
  }
  let max = 0;
  let mostFrequent = 0;

  for(const i in asteroidArray) {
    if (asteroidArray[i] > max) {
    max = asteroidArray[i];
    mostFrequent = i;
  }
}
  return Number(mostFrequent);
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
