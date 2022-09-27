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

  append(value){
    const node = new Node(value);

    if(!this.head){
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next){
      current = current.next;
    }

    current.next = node;
  }

  insertBefore(value, newValue){
    const node = new Node(newValue);

    let current = this.head;

    if(current.value === value){
      node.next = current;
      this.head = node;
      return;
    }

    while(current){
      if(current.next && current.next.value === value){
        node.next = current.next;
        current.next = node;
        return;
      } else {
        current = current.next;
      }
    }
  }

  insertAfter(value, newValue){
    const node = new Node(newValue);

    let current = this.head;
    while(current){
      if(current.value === value){
        node.next = current.next;
        current.next = node;
        return;
      } else {
        current = current.next;
      }
    }
  }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.insertBefore(1, 5);
console.log('populated list', list.toString());

module.exports = LinkedList;
