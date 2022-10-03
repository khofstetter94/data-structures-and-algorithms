'use strict';

let PseudoQueue = require('./pseudo-queue');

describe('Stack', () => {
  it('Can successfully create a queue with empty stacks', () => {
    let queue = new PseudoQueue;

    expect(queue).toEqual({'popStack': [], 'pushStack': []});
  });
  it('Can successfully add values to an empty stack', () => {
    let queue = new PseudoQueue;

    queue.push(1);
    queue.push(2);
    queue.push(3);

    expect(queue.pushStack.length).toEqual(3);
  });
  it('Can successfully dequeue', () => {
    let queue = new PseudoQueue;

    queue.push(1);
    queue.push(2);
    queue.push(3);

    let value = queue.pop();
    expect(value).toEqual(1);
  });
});
