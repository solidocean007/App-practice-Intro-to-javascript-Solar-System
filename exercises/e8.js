import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

// 1st way
// export function findPlanetNameByMoon(data, moonName) {
//   const spaceRock = data.planets
//   .filter(planet => planet.moonsCount > 0)    
//   return spaceRock.find(rock => rock.moons.includes(moonName)).name;
// }

// 2nd way
// export function findPlanetNameByMoon(data, moonName) {
//   const spaceRock = data.planets
//   .find(planet => planet.moons.includes(moonName))    
//   return spaceRock ? spaceRock.name: 'Planet not found';
// }

3rd way
export function findPlanetNameByMoon(data, moonName) {
  const spaceRock = data.planets
  .filter(planet => planet.moonsCount > 0)
  .find(planet => planet.moons.includes(moonName));
  return spaceRock.name;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
