const typeConvert = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(Number.parseInt(arr[i]))) {
      arr[i] = Number.parseInt(arr[i]);
    } else {
      return arr;
    }
  }
  return arr;
};

const sort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return typeConvert(arr);
};

let arr = ["apple", "eagle", 9, "dog", 4, "cat", 1, "ball"];
arr = arr.map((ele) => ele.toString());
console.log(sort(arr));
