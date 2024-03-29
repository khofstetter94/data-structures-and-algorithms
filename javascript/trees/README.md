# Binary Trees & Binary Search Trees

- Binary trees are a type of data structure that has an initial starting 'root' node with two 'left & right' children nodes. Nodes that do not have any children are considered a 'leaf'. Parents are only allowed two children, one left and one right.
- A Binary Search Tree (BST) is a type of tree with data organization. Each parent has two children still (one left and one right) but if the value is less than the parent, that node becomes the left node, and a value that is larger than the parent goes on the right.

## Challenge

- Node
  - Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
- Binary Tree
  - Create a Binary Tree class
    - Define a method for each of the depth first traversals:
      - pre order
      - in order
      - post order which returns an array of the values, ordered appropriately.
- Binary Search Tree
  - Create a Binary Search Tree class
    - This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
    - Add
      - Arguments: value
      - Return: nothing
      - Adds a new node with that value in the correct location in the binary search tree.
    - Contains
      - Argument: value
      - Returns: boolean indicating whether or not the value is in the tree at least once.

## API

- .preOrder(): traverses a binary tree in this order - root, left, right, returns an array of the values
- .inOrder(): traverses a binary tree in this order - left, root, right, returns an array of the values
- .postOrder(): traverses a binary tree in this order - left, right, root, returns an array of the values
- .add(): adds a node with the inserted value into a binary search tree in the appropriate spot
- .contains(): takes in a value and checks if that value exists in a binary search tree

## Challenge 16 - Maximum Value Method

- Write the following method for the Binary Tree class
  - find maximum value
    - Arguments: none
    - Returns: number
- Find the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

## Whiteboard Process

![maxNum whiteboard](./img/maxnum-uml.png)

## Approach & Efficiency

- First I set a temp variable to hold reference to the current highest number. Then I chose to traverse the tree in a preOrder fashion, comparing each node's value to the temp variable's value. If the node's value was higher, then I would set the temp variable to that node's value. Once the traversal ended, I would return the temp variable. The BigO for both time and space is O(n).

## Solution

- Create a binary tree, then use the method .maxValue with no arguments, the return will be a single integer that is the largest number in the tree
