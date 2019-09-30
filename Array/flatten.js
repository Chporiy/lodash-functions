// Flattens array a single level deep.

/**
 * @param {Array} array - array to flatten
 */

const flatten = (array) => {
  let lastItem;
  for (let i = 0; i < array.length; i++) {
    if ( array[i] instanceof Array ) {
      const tempArr = [...array[i]];
      array.splice(i, array.length + i, ...tempArr);
      return array;
    }     
  }
}

console.log( flatten( [1, [2, [3, [4]], 5]]) );