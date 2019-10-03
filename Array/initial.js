// Gets all but the last element of array.

/**
 * @param {Array} array -  The array to query.
 * @return {Array} - Result the slice of array
*/

const initial = (array) => array.slice(0, array.length - 1);

console.log(initial([1, 2, 3]));