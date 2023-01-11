import { maxBy } from "./e17";
import { data } from "../data/data";


// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const rockInfo = data.asteroids
  .reduce((acc, asteroid) => {
    if (acc[asteroid.discoveryYear]) {
      acc[asteroid.discoveryYear]++;
    } else {
      acc[asteroid.discoveryYear] = 1;
    }
    return acc;
  }, []);

    let [largestKey] = (maxBy(Object.entries(rockInfo), ([key, value]) => value ));
    return Number(largestKey)
  } 



// source: https://www.youtube.com/watch?v=NiLUGy1Mh4U&t=961s
// export function sampleFunction(data) {
//   const rockInfo = data.asteroids
//   .reduce((acc, year) => {
//     return { ...acc, [year.discoveryYear]: (acc[year.discoveryYear] || 0) + 1};
//     },{});
// }

 











// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
