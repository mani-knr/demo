"use strict";
const lastIndexOf = (arr, value) => {
  let n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] === value) {
      return i;
    }
  }
};

let arr = [1, 2, 3, 4, 5, 6, 5, 2, 1];
console.log(lastIndexOf(arr, 2));
