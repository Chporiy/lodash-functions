// Removes all given values from array

/**
 * @param {Array} array - array to modify
 * @param {Array} - values to remove
 * @return {Array} -  Array without given values
*/

const pull = (array, ...values) => array.filter(item => !values.includes(item));

console.log( pull(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c') );