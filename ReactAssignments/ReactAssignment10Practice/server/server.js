const express = require("express");
const bodyparser = require("body-parser");
var cors = require("cors");
var app = express();
app.use(
  cors({
    origin: "*",
    methods: "GET,PUT,POST,OPTIONS",
  })
);

const PORT = 3001;
app.use(bodyparser.json());
app.use(express.json());
app.get("/", (req, res) => {
  console.log("route accessed");
  res.send("Welcome to home route");
});
app.get("/getAppointments", (req, res) => {
  res.send("Appointments will  be sent!!");
});
app.post("/", (req, res) => {
  console.log(typeof req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log("server started successfully" + PORT);
});
