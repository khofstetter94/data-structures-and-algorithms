'use strict';

const { HashTable } = require('../hash-table/hash-table');
const { BinaryTree, Node } = require('../trees/binary-tree');


// Write a function called tree_intersection that takes two binary trees as parameters.
// Using your Hashmap implementation as a part of your algorithm, return a set of values found in both trees.

function treeIntersection(oneTree, twoTree) {
  const traverse = (node, hashTable) => {
    let valueToHash = node.value.toString();
    hashTable.set(valueToHash, node.value);
    if (node.left) {
      traverse(node.left, hashTable);
    }
    if (node.right) {
      traverse(node.right, hashTable);
    }
    return hashTable;
  };

  let oneTreeHash = traverse(oneTree.root, new HashTable(100));
  let twoTreeHash = traverse(twoTree.root, new HashTable(100));

  let keys1 = oneTreeHash.keys();

  return keys1.filter(key => twoTreeHash.has(key));
}

// TEST CODE
const oneTree = new BinaryTree();
oneTree.root = new Node(23);
oneTree.root.left = new Node(34);
oneTree.root.right = new Node(90);
oneTree.root.left.left = new Node(2);

const twoTree = new BinaryTree();
twoTree.root = new Node(2);
twoTree.root.left = new Node(90);
twoTree.root.right = new Node(23);
twoTree.root.left.left = new Node(4);

console.log(treeIntersection(oneTree, twoTree));


module.exports = treeIntersection;
