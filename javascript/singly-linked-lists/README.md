# Singly Linked List

A singly linked list is a linear collection of data where each piece of data is represented as a 'node'. The first node in a linked list is refered to as the head, and each node has reference to the next node in line with it's 'next' property. This challenge required the creation of methods that could insert a new node to the beginning of the line, check to see if a value exists in the list, write out all the values in the list in a readable way, append a new value to the end of a list, insert a new value before any given value, and insert any new value after any given value.

## Challenge

- Node
  - Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
- Linked List
  - Create a Linked List class
  - Within your Linked List class, include a head property.
    - Upon instantiation, an empty Linked List should be created.
  - The class should contain the following methods
    - insert
      - Arguments: value
      - Returns: nothing
      - Adds a new node with that value to the head of the list with an O(1) Time performance.
    - includes
      - Arguments: value
      - Returns: Boolean
        - Indicates whether that value exists as a Node’s value somewhere within the list.
    - to string
      - Arguments: none
      - Returns: a string representing all the values in the Linked List, formatted as:
        - "{ a } -> { b } -> { c } -> NULL"
    - append
      - arguments: new value
      - adds a new node with the given value to the end of the list
    - insert before
      - arguments: value, new value
      - adds a new node with the given new value immediately before the first node that has the value specified
    - insert after
      - arguments: value, new value
      - adds a new node with the given new value immediately after the first node that has the value specified

## Approach & Efficiency

- .insert()
  - Approach: Create a new node with the value provided, if the head currently does not have a value - make the input value the head of the list. If a head already exists, set the 'next' of the new node to the existing 'head', then set the head to the new node.
  - BigO: O(1)
- .includes()
  - Approach:Set the current variable to the current head, while a current value exists, compare the input value to the current. If the values match, return true, else set the current to the 'next' of the current so that we traverse down the list. Keep comparing values and if there is no match, return false.
  - BigO: O(n)
- .toString()
  - Approach: Set a variable to an empty string, then while a current value exists, add the value of the current node to the string. Traverse down the list, adding the values to the string as you go. Once at the end of the list, return the string + 'NULL' (to depict that the last node 'next' points to null).
  - BigO: O(n)
- .append()
  - Approach: create a new node, if there is not a head then set the new node as the head. Set a current variable as the head and while there is a current.next, set current to the current.next (so that we traverse down the list until the end). Once at the end, set the current.next to the new node.
  - BigO: O(n)
- .insertBefore()
  - Approach: create a new node with the new value. Set a current variable to this.head and if the current.value equals the inpurt value, set the node.next to the current and the this.head to the node - return. Otherwise, while there is a current, as long as a current.next exits and the current.next.value equals the input value, set the node.next to the current.next and the current.next to the node - return. Else, set the current to the current.next and continue down the list.
  - BigO: O(n)
- .insertAfter()
  - Approach: create a new node with the new value. Set a current variable to this.head and while there is a current, if the current.value equals the input value, set the node.next to the current.next and the current.next to the node - return. Else, set the current to the current.next and continue down the list.
  - BigO: O(n)

## API

- .insert(): takes in a value and adds it as a new node to the beginning of singly linked list.
- .includes(): takes in a value and returns 'true' if it exists in a singly linked list.
- .toString(): returns a string representing all the values in a singly linked list.
- .append(): takes in a value and adds that value to the end of the linked list.
- .insertBefore(): takes in a value and a new value, then inserts the new value before the input value in the linked list.
- .insertAfter(): takes in a value and a new value, then inserts the new value after the input value in the linked list.
