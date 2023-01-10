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
  }, {});

  function maxBy(array) {                  // create a function call maxBy with two parameters
    let max = array[0];                        // assign max to the first index in the array
    for(let i = 0; i < array.length; i++) {    // iterate through the length of the array
      if((array[i]) > (max)){              // if the discovery year
        max = array[i]
      }
    }
    return maxBy(rockInfo);
  }
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
