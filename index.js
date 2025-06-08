const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const { login } = require("./controller/controller");

mongoose.connect("mongodb+srv://ayushsharma2440:ayush%40%4044@sabrang.icpskhz.mongodb.net/sabrang")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Connection Error:", err));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", login);

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
