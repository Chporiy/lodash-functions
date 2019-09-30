const flattenDeep = require('../Array/flattenDeep.js');
const assert = require("assert");

describe('flattenDeep', function () {
  it('Раскрывает вложенне массивы, пока общий уровень массива не станет равным 1', function () {
    assert.deepEqual(flattenDeep([1, [2, [3, [4]], 5]]), [1, 2, 3, 4, 5]);
  })
})