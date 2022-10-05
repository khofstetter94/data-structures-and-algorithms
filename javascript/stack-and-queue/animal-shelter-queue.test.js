'use strict';

let AnimalShelter = require('./animal-shelter-queue');
let Node = require('./animal-shelter-queue');

describe('Stack', () => {
  it('Can successfully enqueue an animal', () => {
    let shelter = new AnimalShelter();
    let cat = new Node('cat');

    shelter.enqueue(cat);

    expect(shelter.front).toEqual(cat);
  });
  it('Returns null if animal does not exist in queue', () => {
    let shelter = new AnimalShelter();
    let cat1 = new Node('cat');
    let cat2 = new Node('cat');

    shelter.enqueue(cat1);
    shelter.enqueue(cat2);

    let animal = shelter.dequeue('dog');
    console.log(animal);
    expect(animal).toEqual(null);
  });
});
