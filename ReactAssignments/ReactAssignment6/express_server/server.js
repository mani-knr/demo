const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  // console.log(req.headers);
  console.log("get requested");
  res.send("You've made a get request");
});

app.post("/", (req, res) => {
  console.log(`Received message: ${JSON.stringify(req.body)}`);
  res.send("POST request received" + JSON.stringify(req.body));
});

app.listen(PORT, () => {
  console.log(`express served started on port ${PORT}`);
});
