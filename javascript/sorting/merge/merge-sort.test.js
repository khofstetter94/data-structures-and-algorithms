'use strict';

let { mergeSort } = require('./merge-sort');

describe('mergeSort', () => {
  it('Can successfully return the array sorted in ascending order', () => {
    let arr = [8,4,23,42,16,15];
    mergeSort(arr);

    expect(arr).toEqual([4,8,15,16,23,42]);
  });
  it('Can successfully return the array sorted in ascending order, even with negative numbers', () => {
    let arr = [8,4,-23,42,16,-15];
    mergeSort(arr);

    expect(arr).toEqual([-23,-15,4,8,16,42]);
  });
  it('Can successfully return the array sorted in ascending order, even with multiples of the same number', () => {
    let arr = [8,4,14,14,4,12];
    mergeSort(arr);

    expect(arr).toEqual([4,4,8,12,14,14]);
  });
  it('Can successfully return the array sorted in ascending order, even when its initially a descending array', () => {
    let arr = [20,18,12,8,5,-2];
    mergeSort(arr);

    expect(arr).toEqual([-2,5,8,12,18,20]);
  });
});
