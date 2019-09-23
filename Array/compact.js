// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey
// array - входной массив.

const compact = (array) => {
  const falseyValues = [false, null, 0, '', undefined, NaN];
  let result = array.filter(item => !falseyValues.includes(item));
  return result;
}

console.log(compact([1, 2, 3, 0, false, null, '', undefined, NaN]));