// The inverse of _.toPairs; this method returns an object composed from key-value pairs.

/**
 * @param {Array} array - the key-value pairs
 * @return {Object}  
 */

const fromPairs = (array) => {
  let result = {};
  array.forEach(innerArray => {
    for (let i = 0; i < innerArray.length; i++) {
      if (i == 0)
        result[innerArray[i]] = '';
        else
          result[innerArray[i - 1]] = innerArray[i];      
    }
  });
  return result;
}

console.log(fromPairs( [['a', 1], ['b', 2]]) );