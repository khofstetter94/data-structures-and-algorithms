class Node {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
  }

  toString() {
    let str = '';
    let current = this.front;
    while (current) {
      str += `[${current.value}] => `;
      current = current.next;
    }
    return `${str}NULL`;
  }

  enqueue(node) {
    if (this.front === null) {
      this.front = node;
      this.front.next = null;
      return;
    }
    let prev = null;
    let current = this.front;
    while (current) {
      prev = current;
      current = current.next;
    }
    prev.next = node;
  }

  dequeue() {
    if (this.front === null) {
      let node = this.front;
      this.front = null;
      return node;
    }

    let node = this.front;
    this.front = this.front.next;
    return node;
  }
}

module.exports = {
  Queue, Tree, Node
};
