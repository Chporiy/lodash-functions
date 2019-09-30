// Recursively flattens array.

/**
 * @param array - array to flatten
*/

module.exports = flattenDeep = (array) => {
  let lastItem,
    foundLastItem = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      const tempArr = [...array[i]];
      if (typeof tempArr[tempArr.length - 1] == 'number' && !foundLastItem) {
        lastItem = tempArr[tempArr.length - 1];
        foundLastItem = true;
      }
      array.splice(i, array[i].length + 1, ...tempArr);
    }  
  }
  array.push(lastItem);
  return array;
}

console.log( flattenDeep([1, [2, [3, [4]], 5]]) );