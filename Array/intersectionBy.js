// This method is like .intersection() except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which they're compared. 
// The order and references of result values are determined by the first array. 

/**
 * @param {Array} mainArray - The array tp inspect
 * @param {Array} secondaryArray - The array tp inspect
 * @param {String} iteratee - The iteratee invoked per element.
 * @return {Array} - The new array of intersecting values.
 */

const intersectionBy = (mainArray, secondaryArray, iteratee) => {
  let result = [];
  mainArray.forEach(mainItem => {
    result.push( secondaryArray.filter(secondaryItem => secondaryItem.hasOwnProperty(iteratee) && JSON.stringify(mainItem) === JSON.stringify(secondaryItem)) );
  });
  return result;
}

console.log(intersectionBy([{ 'x': 1 }, { 'x': 2 }], [{ 'x': 2 }, { 'x': 1 }], 'x'));