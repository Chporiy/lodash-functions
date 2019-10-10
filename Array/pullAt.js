// Removes elements from array corresponding to indexes and returns an array of removed elements.

/**
 * @param {Array} array - array to modify
 * @param {Number} indexes - The indexes of elements to remove
 * @return {Arrays} - new array of removed elements
*/

const pullAt = (array, ...indexes) => {
  let result = [];
  for (let i = 0; i < indexes.length; i++) {
    result.push(array[indexes[i]]);
  }
  return result;
}

console.log(pullAt([1, 2, 3, 4], 1, 2));