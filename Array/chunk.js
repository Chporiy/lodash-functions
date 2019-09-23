/* 
  Chunk разбивает входной массив на два массива по указанному индексу
  array - входной массив
  index - позиция с которой разделить массив
*/

const chunk = (array, index) => {
  let firstArray = [],
      secondArray = [],
      pos = 0;
  array.forEach((item, i) => {
    i < index ? firstArray[i] = item : secondArray[pos++] = item;
  });

  return {firstArray, secondArray};
}

console.log(chunk([1, 2, 3, 4], 2));