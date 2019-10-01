// Gets the index at which the first occurrence of value is found in array. 
// If fromIndex is negative, it's used as the offset from the end of array.

/**
 * @param {Array} array - array to inspect
 * @param {String | Number} value - value to search for
 * @param {Number = 0} fromIndex - index to search from
 */

const indexOf = (array, value, fromIndex = 0) => {
  let found =  false;
  if (fromIndex < 0)
    for (let i = array.length; i > fromIndex; i--) {
      if (array[i] == value) {
        found = true;
        return i;      
      } 
    }

  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] == value) {
      found = true;
      return i;
    }
  }

  if (found == false) return -1;
}

console.log( indexOf([1, 2, 1, 2], 2, -2) );