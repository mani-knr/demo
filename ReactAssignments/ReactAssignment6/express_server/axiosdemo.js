const axios = require("axios");
axios
  .get("http://localhost:8000/")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

axios
  .post("http://localhost:8000/", {
    message: "Post message done",
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
