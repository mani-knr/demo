const shift = (arr) => {
  let newArray = [];
  for (let i = 1; i < arr.length; i++) {
    newArray[i - 1] = arr[i];
  }
  return newArray;
};
let arr = [1, 2, 3, 4, 5, 6];
console.log(shift(arr));
