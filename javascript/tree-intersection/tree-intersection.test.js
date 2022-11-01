'use strict';

describe('treeIntersection', () => {
  it('Can successfully provide an array of collisions between two trees', () => {
    const treeIntersection = require('./tree-intersection');
    const { BinaryTree, Node } = require('../trees/binary-tree');

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

    let matches = treeIntersection(oneTree, twoTree);
    expect(matches).toEqual(['2', '90', '23']);
  });
  it('Can successfully return an empty array if there are no collisions', () => {
    const treeIntersection = require('./tree-intersection');
    const { BinaryTree, Node } = require('../trees/binary-tree');

    const oneTree = new BinaryTree();
    oneTree.root = new Node(56);
    oneTree.root.left = new Node(34);
    oneTree.root.right = new Node(99);
    oneTree.root.left.left = new Node(8);

    const twoTree = new BinaryTree();
    twoTree.root = new Node(2);
    twoTree.root.left = new Node(90);
    twoTree.root.right = new Node(23);
    twoTree.root.left.left = new Node(4);

    let matches = treeIntersection(oneTree, twoTree);
    expect(matches).toEqual([]);
  });
  it('Can successfully compare two trees of different sizes', () => {
    const treeIntersection = require('./tree-intersection');
    const { BinaryTree, Node } = require('../trees/binary-tree');

    const oneTree = new BinaryTree();
    oneTree.root = new Node(56);
    oneTree.root.left = new Node(90);

    const twoTree = new BinaryTree();
    twoTree.root = new Node(2);
    twoTree.root.left = new Node(90);
    twoTree.root.right = new Node(23);
    twoTree.root.left.left = new Node(4);

    let matches = treeIntersection(oneTree, twoTree);
    expect(matches).toEqual(['90']);
  });
});
