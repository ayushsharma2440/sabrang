const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  events: [String]
});

const eventSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  link: String,
  coordinator:String,
  timings:String,
  qrID:String
});

const User = mongoose.model("User", userSchema);
const Event = mongoose.model("Event", eventSchema);

module.exports = { User, Event };
