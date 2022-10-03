'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(value){
    const node = new Node(value);

    if(!this.top){
      this.top = node;
      return;
    }

    let current = this.top;
    while(current){
      node.next = current;
    }

    this.top = node;
  }

  pop(){
    const temp = this.top;

    if (temp === null){
      return 'empty stack';
    } else {
      this.top = temp.next;
      temp.next = null;
      return temp.value;
    }
  }

  peek(){
    if(this.top === null){
      return 'empty stack';
    } else {
      return this.top.value;
    }

  }

  isEmpty(){
    if(this.top === null){
      return true;
    } else {
      return false;
    }
  }
}

class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(value){
    const node = new Node(value);

    if(!this.front){
      this.front = node;
      return;
    }

    let current = this.top;
    while(current.next){
      current = node.next;
      this.rear = current.next;
    }

    this.front = node;
  }

  dequeue(){
    const temp = this.front;

    if (temp === null){
      return 'empty queue';
    } else {
      this.front = temp.next;
      temp.next = null;
      return temp.value;
    }
  }

  peek(){
    if(this.front === null){
      return 'empty queue';
    } else {
      return this.front.value;
    }

  }

  isEmpty(){
    if(this.front === null){
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack, Queue;
