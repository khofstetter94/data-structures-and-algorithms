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

  push(value){
    const node = new Node(value);

    if(!this.top){
      this.top = node;
      return;
    }

    node.next = this.top;
    this.top = node;
  }

  isEmpty(){
    if(this.top === null){
      return true;
    } else {
      return false;
    }
  }
}

const bracketDictionary = {
  '[': ']',
  '{': '}',
  '(': ')',
};


function validateBrackets(string) {
  let openers = new Stack();
  for (let char of string) {
    if (char === '(' || char === '[' || char === '{') {
      openers.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (bracketDictionary[openers.peek()] === char) {
        openers.pop();
      } else return false;
    }
  }
  if (openers.isEmpty()) {
    return true;
  } else return false;
}

module.exports = { Node, Stack, validateBrackets };
