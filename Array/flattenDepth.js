// Recursively flatten array up to depth times.

/**
 * @param {Array} array - array to flatten
 * @param {Number} depth - The maximum recursion depth.
 */

const flattenDepth = (array, depth = 1) => {
  if (depth == 0) return array;
  let lastItem,
    foundLastItem = false;
  for (let i = 0; i < depth + 1; i++) {
    if (array[i] instanceof Array) {
      const tempArr = [...array[i]];
      if (typeof tempArr[tempArr.length - 1] === 'number' && !foundLastItem) {
        foundLastItem = true;
        lastItem = tempArr[tempArr.length - 1];
      }
      array.splice(i, array[i].length + 1, ...tempArr);
    }
  }
  if (depth != 1) array.push(lastItem);
  return array;
} 
console.log(flattenDepth([1, [2, [3, [4]], 5]], 2));