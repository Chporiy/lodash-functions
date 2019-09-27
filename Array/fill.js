// Fills elements of array with value from start up to, but not including, end.

/**
 * @param {Array} array The array to fill.
 * @param {any} value The value to fill array with.
 * @param {number} start The value to fill array with.
 * @param {number} end The value to fill array with.
 */

const fill = (array, value, start = 0, end = array.length) => {
  return array.map((item, i) => {
    item = (i >= start && i <= end) ? value : item
  });
}

console.log( fill(Array(3), 2) );