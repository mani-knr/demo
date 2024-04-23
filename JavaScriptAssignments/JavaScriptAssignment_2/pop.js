"use strict";
const pop = (arr) => {
  let n = arr.length;
  let newArray = [];
  for (let i = 0; i < n - 1; i++) {
    newArray[i] = arr[i];
  }
  return newArray;
};

let arr = [1, 2, 3, 4, 5, 6];
console.log(pop(arr));
