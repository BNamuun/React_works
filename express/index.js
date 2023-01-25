const express = require("express");

// Requiring module like importing cors and express
const cors = require("cors");
const { response } = require("express");

// Port Number
const port = 8000;

// creating express app
const app = express();

const users = [
  {
    id: 1,
    text: "Bread",
  },
  {
    id: 2,
    text: "Milk",
  },
  {
    id: 3,
    text: "Egg",
  },
  {
    id: 4,
    text: "Water",
  },
];

// enabling CORS for any unknown origin(https://xyz.example.com)
app.use(cors());

// sample api routes for testing
app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/save", (req, res) => {
  //   users.push({ name: "Bat" });
  res.json(users);
});

// Server setup
app.listen(port, () => {
  console.log("App is listening at port", port);
});
