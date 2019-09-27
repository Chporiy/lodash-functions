// This method is like _.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.

const users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
]

const func = (o) => o.user == 'barney';
const predicateObject = { 'user': 'fred', 'active': false };
const predicateArray = ['active', false];
const predicateString = 'active';

/**
 * @param {Array} array - The array to inspect
 * @param {Function} predicate - The function invoked per iteration.
 * @return {Number} - Returns the index of the found element, else -1.
 */

const findIndex = (array, predicate) => {
  if (typeof predicate === 'function') {
    for (let i = 0; i < array.length; i++) {
      if ( predicate(array[i]) ) return i;
    }
  }

  if (predicate instanceof Object && !(predicate instanceof Array) ) {
    const predicateJSON = JSON.stringify(predicate);
    for (let i = 0; i < array.length; i++) {
      if ( JSON.stringify(array[i]) === predicateJSON ) return i;      
    }
  }

  if ( predicate instanceof Array ) {
    for (let i = 0; i < array.length; i++) {
      if ( array[i].hasOwnProperty(predicate[0]) && array[i][predicate[0]] === predicate[1] ) return i;
    }
  }

  if ( typeof predicate === 'string') {
    for (let i = 0; i < array.length; i++) {
      if ( array[i].hasOwnProperty(predicate) && array[i][predicate] === true) return i;      
    }
  }
}

console.log( findIndex(users, func) );
console.log( findIndex(users, predicateObject) );
console.log( findIndex(users, predicateArray) );
console.log( findIndex(users, predicateString) );