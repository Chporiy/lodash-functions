// This method is like .intersection() except that it accepts comparator which is invoked to compare elements of arrays. 
// The order and references of result values are determined by the first array. 
// The comparator is invoked with two arguments: (arrVal, othVal).

/**
 * @param {Array} objects - The array to inspects.
 * @param {Array} others - The array to inspects.
 * @param {Boolean} isEqual - The comparator invoked per element. 
*/

const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

const intersectionWith = (objects, others, isEqual) => {
  let result;
  others.forEach(other => {
    result = objects.filter(object => (JSON.stringify(object) === JSON.stringify(other)) === isEqual)
  });
  return result;
}

console.log( intersectionWith(objects, others, true) );