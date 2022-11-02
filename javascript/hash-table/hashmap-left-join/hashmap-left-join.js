'use strict';

const { HashTable } = require('../hash-table');

// Write a function called left join
// Arguments: two hash maps
// The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
// The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
// Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

function leftJoin (hashOne, hashTwo) {
  let finalArr = [];

  let hashOneKeys = hashOne.keys();
  for( let i = 0; i < hashOneKeys.length; i++){
    let combinedArr = [];
    if(hashTwo.has(hashOneKeys[i])){
      let pairOne = hashOne.get(hashOneKeys[i]);
      let pairTwo = hashTwo.get(hashOneKeys[i]);
      combinedArr.push([hashOneKeys[i], pairOne, pairTwo]);
    } else {
      let pairOne = hashOne.get(hashOneKeys[i]);
      combinedArr.push([hashOneKeys[i], pairOne, null]);
    }
    finalArr.push(combinedArr);
  }

  return finalArr;
}

let hashOne = new HashTable(20);
let hashTwo = new HashTable(20);

hashOne.set('diligent', 'employed');
hashOne.set('fond', 'enamored');
hashOne.set('guide', 'usher');
hashOne.set('outfit', 'garb');
hashOne.set('wrath', 'anger');

hashTwo.set('diligent', 'idle');
hashTwo.set('fond', 'averse');
hashTwo.set('guide', 'follow');
hashTwo.set('flow', 'jam');
hashTwo.set('wrath', 'delight');

let array = leftJoin(hashOne, hashTwo);
console.log(array);

module.exports = leftJoin;
