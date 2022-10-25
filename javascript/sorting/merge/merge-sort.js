'use strict';

let arr = [8,4,23,42,16,15];

function merge(arr, left, right) {
  let i = 0;
  let j = 0;
  let k = 0;

  while(i < left.length && j < right.length){
    if(left[i] <= right[j]){
      arr[k] = left[i];
      i = i + 1;
    } else {
      arr[k] = right[j];
      j = j + 1;
    }
    k = k + 1;
  }

  if(i === left.length){
    for (let h = j; h < right.length; h++) {
      arr[k] = right[h];
      k++;
    }
  } else {
    for (let h = i; h < left.length; h++) {
      arr[k] = left[h];
      k++;
    }
  }
}

function mergeSort(arr) {
  let arrLength = arr.length;

  if (arrLength > 1) {
    let mid = Math.floor(arrLength/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arrLength);

    mergeSort(left);
    mergeSort(right);
    merge(arr, left, right);
  }
}

mergeSort(arr);
console.log(arr);

module.exports = { merge, mergeSort };
