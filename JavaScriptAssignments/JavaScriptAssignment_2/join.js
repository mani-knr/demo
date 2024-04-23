const join = (arr) => {
  let joinedArr = "";
  for (let ele of arr) joinedArr += ele;
  return joinedArr;
};

let arr = ["apple", 1, "ball", 2, "cat", 3];
console.log(join(arr));
