'use strict';

let { BinaryTree, Node, BinarySearchTree } = require('./binary-tree');

describe('LinkedList', () => {
  it('Can successfully instantiate an empty tree', () => {
    let tree = new BinaryTree();
    expect(tree.root).toEqual(null);
  });
  it('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    expect(tree.root.value).toEqual(1);
  });
  it('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    let tree = new BinaryTree();
    tree.root = new Node(2);
    tree.root.left = new Node (1);
    tree.root.right = new Node (3);
    expect(tree.root.value).toEqual(2);
    expect(tree.root.left.value).toEqual(1);
    expect(tree.root.right.value).toEqual(3);
  });
  it('Can successfully return a collection from a preorder traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(15);
    tree.root.left = new Node(10);
    tree.root.right = new Node(18);
    tree.root.left.left = new Node(6);
    tree.root.left.right = new Node(12);
    tree.root.right.right = new Node(20);
    console.log(tree.preOrder());
    expect(tree.preOrder()).toEqual([15,10,6,12,18,20]);
  });
  it('Can successfully return a collection from an inorder traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(15);
    tree.root.left = new Node(10);
    tree.root.right = new Node(18);
    tree.root.left.left = new Node(6);
    tree.root.left.right = new Node(12);
    tree.root.right.right = new Node(20);
    console.log(tree.inOrder());
    expect(tree.inOrder()).toEqual([6,10,12,15,18,20]);
  });
  it('Can successfully return a collection from a postorder traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(15);
    tree.root.left = new Node(10);
    tree.root.right = new Node(18);
    tree.root.left.left = new Node(6);
    tree.root.left.right = new Node(12);
    tree.root.right.right = new Node(20);
    console.log(tree.postOrder());
    expect(tree.postOrder()).toEqual([6,12,10,20,18,15]);
  });
  it('Returns true/false for the contains method, given an existing or non-existing node value', () => {
    let tree = new BinarySearchTree();
    tree.root = new Node(15);
    tree.root.left = new Node(10);
    tree.root.right = new Node(18);
    tree.root.left.left = new Node(6);
    tree.root.left.right = new Node(12);
    tree.root.right.right = new Node(20);
    expect(tree.contains(10)).toEqual(true);
    expect(tree.contains(99)).toEqual(false);
  });
  it('Can successfully return the highest number in a binary tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(15);
    tree.root.left = new Node(10);
    tree.root.right = new Node(18);
    tree.root.left.left = new Node(6);
    tree.root.left.right = new Node(12);
    tree.root.right.right = new Node(20);
    expect(tree.maxValue()).toEqual(20);
  });
});
