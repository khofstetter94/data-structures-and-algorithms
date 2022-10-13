const { Queue, Node } = require('./class');

function fizzBuzz(node) {
  if (node === null) return null;
  const newNode = new Node();
  if (node.value % 15 === 0) {
    newNode.value = 'FizzBuzz';
  } else if (node.value % 5 === 0) {
    newNode.value = 'Buzz';
  } else if (node.value % 3 === 0) {
    newNode.value = 'Fizz';
  } else {
    newNode.value = node.value.toString();
  }
  return newNode;
}

function fizzBuzzTree(kary) {
  if (!kary.root) return null;
  const queue = new Queue();
  const fizzQueue = new Queue();
  let current = kary.root;
  let newTreeCurrent = fizzBuzz(current);
  while(current) {
    if (current.children.length > 0) {
      current.children.forEach(child => {
        const fizzChild = fizzBuzz(child);
        newTreeCurrent.children.push(fizzChild);
        queue.enqueue(child);
        fizzQueue.enqueue(fizzChild);
      });
    }
    current = queue.dequeue();
    newTreeCurrent = fizzQueue.dequeue();
  }
  let newTreeRoot = newTreeCurrent;
  return newTreeRoot;
}

module.exports = fizzBuzzTree;
