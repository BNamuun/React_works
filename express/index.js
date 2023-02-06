const { v4: uuid } = require("uuid");
const express = require("express");
const fs = require("fs");

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

// let categories = [
//   {
//     id: uuid(),
//     name: "Politics",
//   },
//   {
//     id: uuid(),
//     name: "Sport",
//   },
//   {
//     id: uuid(),
//     name: "Art",
//   },
//   {
//     id: uuid(),
//     name: "Tech",
//   },
// ];
function readCategories() {
  const content = fs.readFileSync("categories.json");
  const categories = JSON.parse(content);
  return categories;
}
// enabling CORS for any unknown origin(https://xyz.example.com)
app.use(cors());
app.use(express.json());
// sample api routes for testing
app.get("/", (req, res) => {
  res.send("Hello");
});
// app.get("/users", (req, res) => {
//   res.json(users);
// });
app.get("/users", (req, res) => {
  //   users.push({ name: "Bat" });
  res.json(users);
});
app.get("/categories", (req, res) => {
  const { q } = req.query;
  const categories = readCategories();
  if (q) {
    const filteredList = categories.filter((category) =>
      category.name.toLowerCase().includes(q.toLowerCase())
    );
    res.json(filteredList);
  } else {
    res.json(categories);
  }
  // res.json(categories);
});
app.get("/categories/:id", (req, res) => {
  const { id } = req.params;
  const categories = readCategories();
  const one = categories.find((category) => category.id === id);
  if (one) {
    res.json(one);
  } else {
    res.sendStatus(404);
  }
});

// Post request
app.post("/categories", (req, res) => {
  const { name } = req.body;
  const categories = readCategories();
  const newCategory = { id: uuid(), name: name };
  categories.unshift(newCategory);
  fs.writeFileSync("categories.json", JSON.stringify(categories));
  res.sendStatus(201);
});

app.delete("/categories/:id", (req, res) => {
  const { id } = req.params;
  const categories = readCategories();
  const one = categories.find((category) => category.id === id);
  if (one) {
    const newList = categories.filter((category) => category.id !== id);
    // categories = newList;
    fs.writeFileSync("categories.json", JSON.stringify(newList));
    res.json({ deletedId: id });
  } else {
    res.sendStatus(404);
  }
});

app.put("/categories/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const categories = readCategories();
  const index = categories.findIndex((category) => category.id === id);
  if (index > -1) {
    categories[index].name = name;
    fs.writeFileSync("categories.json", JSON.stringify(categories));
    res.json({ updateId: id });
  } else {
    res.sendStatus(404);
  }
});

// Server setup
app.listen(port, () => {
  console.log("App is listening at port", port);
});
