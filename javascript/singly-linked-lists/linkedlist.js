'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insert(value){
    const node = new Node(value);

    if(!this.head){
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  traverse(){
    let current = this.head;
    while(current){
      current = current.next;
    }
  }

  includes(value){
    let current = this.head;
    while(current){
      if(current.value === value){
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  toString(){
    let current = this.head;
    let str = '';
    while(current){
      str = str + `{${current.value}} -> `;
      current = current.next;
    }
    return str + 'NULL';
  }
}

module.exports = LinkedList;
