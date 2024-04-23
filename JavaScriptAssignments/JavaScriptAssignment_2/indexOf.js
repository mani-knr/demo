"use strict";
const indexOf = function (arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(indexOf(arr, 7));
