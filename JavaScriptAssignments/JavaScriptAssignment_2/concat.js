"use strict";
const concat = function (arr1, arr2) {
  let i = arr1.length;
  for (let ele of arr2) {
    arr1[i] = ele;
    i++;
  }
  return arr1;
};
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["apple", "ball", "cat", "dog"];

console.log(concat(arr1, arr2));
