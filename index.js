const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const { login, signup } = require("./controller/controller");

mongoose.connect("mongodb://localhost:27017/sabrang")
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
app.post("/signup",signup);

app.get("/signup",(req,res)=>{
  res.render("signup");
})

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
