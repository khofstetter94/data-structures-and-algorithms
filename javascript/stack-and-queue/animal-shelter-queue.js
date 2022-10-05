'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
  }

  enqueue(animal) {

    if (!this.front) {
      this.front = animal;
      return;
    }

    let current = this.front;
    while (current.next) {
      current = current.next;
    }
    current.next = animal;
  }

  dequeue(preference) {
    if (!this.front) {
      return 'no pets available';
    }

    if (this.front.value === preference) {
      let val = this.front.value;
      this.front = this.front.next;
      return val;
    }

    let prev = this.front;
    let current = this.front.next;

    while (current) {
      if (preference === current.value) {
        let chosen = current;
        prev.next = chosen.next;
        return chosen.value;
      } else {
        prev = current;
        current = current.next;
      }
    }
    return null;
  }

  toString(){
    let current = this.front;
    let str = '';
    while (current) {
      str += `${current.value} -> `;
      current = current.next;
    }
    return `${str}null`;
  }
}

module.exports = AnimalShelter, Node;
