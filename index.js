const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");
app.use(cors());

const chef = require("./data/chef.json");

app.get("/", (req, res) => {
  res.send("serevr running");
});
app.get("/chef", (req, res) => {
  res.send(chef);
});
// app.get("/chef/:id", (req, res) => {
//   const id = req.params.id;
//   console.log(id);
//   const chefrecipes = chef.find(d.id == id);
//   res.send(chefrecipes);
// });

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const chefrecipe = chef.find((d) => d.id == id);
  res.send(chefrecipe);
});

app.listen(port, () => {
  console.log("2nd running");
});
