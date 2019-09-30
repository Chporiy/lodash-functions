const chunk = require('../Array/chunk');
const assert = require("assert");

describe('chunk', function () {
  it('Разбивает массив на 2 отдельных массива по указателю на индекс', function () {
    assert.deepEqual(chunk([1, 2, 3, 4], 2), [ [1, 2], [3, 4] ]);
  })
})