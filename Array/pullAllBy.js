// This method is like _.pull except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared.

/**
 * @param {Array} - array to modify
 * @param {Array} - values to remove
 * @param {String} - the iteratee invoked per element.
 * @return {Array} - array without given values
*/

let array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];

const pullAllBy = (array, iteratee, values) => {
  return array.filter(item => item.hasOwnProperty(iteratee) && JSON.stringify(item) != JSON.stringify(values[0]) && JSON.stringify(item) != JSON.stringify(values[1]) )
}

console.log(pullAllBy(array, 'x', [{ 'x': 1 }, { 'x': 3 }]));