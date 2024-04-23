const unshift = (arr, value) => {
  let newArray = [];
  newArray[0] = value;
  for (let i = 0; i < arr.length; i++) {
    newArray[i + 1] = arr[i];
  }
  return newArray;
};
let arr = [1, 2, 3, 4, 5, 6];
console.log(unshift(arr, 9));
