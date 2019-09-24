// Creates a slice of array with n elements dropped from the beginning.

/**
 * @param {Array} array Incoming array
 * @param {Number} number The number of element to drop
 */

const drop = (array, number = 1) => array.slice(number, array.length);


console.log(drop([1, 2, 3]));