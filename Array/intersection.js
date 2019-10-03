// Creates an array of unique values. The order and references of result values are determined by the first array.

/**
 * @param {Array} mainArray - The array to inspect.  
 * @param {Array} secondaryArray - The array to inspect. 
 * @return {Array} - The new array of intersecting values.
*/

const intersection = (mainArray, secondaryArray) => mainArray.filter(mainItem => secondaryArray.includes(mainItem));

console.log(intersection([2, 1], [2, 3]));