'use strict';

describe('hashmap left join', () => {
  it('Can successfully join two hashmaps, combining the values of a common key into one array with the key', () => {
    const leftJoin = require('./hashmap-left-join');
    const { HashTable } = require('../hash-table');

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
    expect(array).toEqual([
      [ [ 'wrath', 'anger', 'delight' ] ],
      [ [ 'diligent', 'employed', 'idle' ] ],
      [ [ 'outfit', 'garb', null ] ],
      [ [ 'guide', 'usher', 'follow' ] ],
      [ [ 'fond', 'enamored', 'averse' ] ]
    ]);
  });
  it('Can successfully join two hashmaps, combining hashmaps of varying sizes', () => {
    const leftJoin = require('./hashmap-left-join');
    const { HashTable } = require('../hash-table');

    let hashOne = new HashTable(20);
    let hashTwo = new HashTable(20);

    hashOne.set('diligent', 'employed');
    hashOne.set('fond', 'enamored');
    hashOne.set('guide', 'usher');
    hashOne.set('outfit', 'garb');
    hashOne.set('wrath', 'anger');

    hashTwo.set('diligent', 'idle');
    hashTwo.set('fond', 'averse');

    let array = leftJoin(hashOne, hashTwo);
    expect(array).toEqual([
      [ [ 'wrath', 'anger', null ] ],
      [ [ 'diligent', 'employed', 'idle' ] ],
      [ [ 'outfit', 'garb', null ] ],
      [ [ 'guide', 'usher', null ] ],
      [ [ 'fond', 'enamored', 'averse' ] ]
    ]);
  });
});
