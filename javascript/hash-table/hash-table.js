'use strict';

const { LinkedList } = require('../singly-linked-lists/linkedlist');

class HashTable {
  constructor (size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key){
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value){
    let position = this.hash(key);
    let data = {[key]: value};

    if(this.buckets[position]){
      let bucket = this.buckets[position];
      bucket.add(data);
    } else {
      let bucket = new LinkedList();
      bucket.add(data);
      this.buckets[position] = bucket;
    }
  }

  get(key){
    let position = this.hash(key);

    if(this.buckets[position]){
      let bucket = this.buckets[position];
      let value = bucket.head.value[key];
      return value;
    }
  }

  has(){

  }

  keys(){

  }
}

module.exports = HashTable;
