'use strict';

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
    this.buckets[position] = data;
  }

  get(key){
    let position = this.hash(key);

    if(this.buckets[position]){
      let bucket = this.buckets[position];
      let value = bucket[key];
      return value;
    }
  }

  has(key) {
    let position = this.hash(key);
    if (this.buckets[position] &&
        this.buckets[position][key]
    ) {
      return true;
    }
    return false;
  }

  keys(){
    return this.buckets.filter(bucket => bucket).map(bucket => {
      return Object.keys(bucket)[0];
    });
  }
}

module.exports = { HashTable };
