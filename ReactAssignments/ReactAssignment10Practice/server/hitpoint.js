let data = {
  name: "manikanta",
  age: 22,
};

let obj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
};
fetch("http://localhost:3001/", obj)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
