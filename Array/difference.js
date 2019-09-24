// Creates an array of array values not included in the other given arrays. 
// The order and references of result values are determined by the first array.

const difference = (array1, array2) => result = array1.filter(item1 => !array2.includes(item1));

console.log(difference([2, 1, 5, 7, 9 , 10, 4], [2, 3, 4 ,5, 10]));