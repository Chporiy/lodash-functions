// This method is like difference(array) except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. 
// The order and references of result values are determined by the first array. The iteratee is invoked with one argument: (value).

const differenceBy = (array1, array2, property) => {
  let result = [];
  array2.forEach(item2 => {
    result = array1.filter(item1 => item1.hasOwnProperty(property) && JSON.stringify(item1) === JSON.stringify(item2));
  });

  return result;
}

console.log(differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));
