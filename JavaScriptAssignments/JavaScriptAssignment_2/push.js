"use strict";
const push = (arr, value) => {
  let n = arr.length;
  arr[n] = value;
  return arr;
};

let arr = [1, 2, 3, 4, 5];
console.log(push(arr, "apple"));
