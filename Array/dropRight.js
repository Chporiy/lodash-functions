// Creates a slice of array with n elements dropped from the end.

/**
 * @param {Array} array Incoming array
 * @param {Number} number The number of element to drop
 */

const dropRight = (array, number = 1) => array.slice(0, number === 0 ? array.length : -number);

console.log(dropRight([1, 2, 3], 0));