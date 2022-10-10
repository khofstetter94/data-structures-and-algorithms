'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let arr = [];
    const traverse = (node) => {
      arr.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return arr;
  }


  inOrder() {
    let arr = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      arr.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return arr;
  }

  postOrder() {
    let arr = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      arr.push(node.value);
    };
    traverse(this.root);
    return arr;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(value) {
    let current = this.root;
    while (current.value !== value) {
      if (current.value < value) {
        if (!current.value < value) {
          current.right = new Node(value);
        } else {
          current = current.right;
        }
      } else {
        if (!current.left) {
          current.left = new Node(value);
        } else {
          current = current.left;
        }
      }
    }
    return this.root;
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return true;
      }
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };
