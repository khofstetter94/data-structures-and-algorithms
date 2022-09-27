'use strict';

let LinkedList = require('./linkedlist');

describe('LinkedList', () => {
  it('Can successfully instantiate an empty linked list', () => {
    let list = new LinkedList();
    expect(list.head).toEqual(null);
  });
  it('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    expect(list.head.value).toEqual(1);
  });
  it('The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.head.value).toEqual(3);
  });
  it('Can properly insert multiple nodes into the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
  });
  it('Will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.includes(2)).toEqual(true);
  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.includes(6)).toEqual(false);
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.toString()).toEqual('{3} -> {2} -> {1} -> NULL');
  });
  it('Can successfully add a node to the end of the linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
  });
  it('Can successfully add multiple nodes to the end of a linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
  });
  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertBefore(3, 99);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(99);
    expect(list.head.next.next.next.value).toEqual(3);
  });
  it('Can successfully insert a node before the first node of a linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertBefore(1, 99);
    expect(list.head.value).toEqual(99);
    expect(list.head.next.value).toEqual(1);
    expect(list.head.next.next.value).toEqual(2);
    expect(list.head.next.next.next.value).toEqual(3);
  });
  it('Can successfully insert after a node in the middle of the linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertAfter(2, 99);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(99);
    expect(list.head.next.next.next.value).toEqual(3);
  });
  it('Can successfully insert a node after the last node of the linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertAfter(3, 99);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next.value).toEqual(99);
  });
});
