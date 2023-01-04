import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902


// 1st way
export function getGreatestDiscoveryYear(data) {
  const s = {};
  data.asteroids.map(y => y.discoveryYear)
  .map((x) => { 
    s[x] = s[x]+ 1 || 1;
  });
  let k = Object.keys(s);
  let v = Object.values(s);
  let max = Math.max(...v);
  let i = v.findIndex(x => x == max)
  return Number(k[i]);
}


//2nd way
export function getGreatestDiscoveryYear(data) {
  const timeWellSpent = data.asteroids.reduce((acc, cur) => {
    if(acc[cur.discoveryYear]) {
      acc[cur.discoveryYear]++;
    } else {
      acc[cur.discoveryYear] = 1;
    }
    return acc;
  }, {})
  
  let k = Object.keys(timeWellSpent);
  let v = Object.values(timeWellSpent);
  let max = Math.max(...v);
  let i = v.findIndex(x => x == max)
  return Number(k[i]);
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
