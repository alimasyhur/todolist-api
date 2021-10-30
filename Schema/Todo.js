const mongoose = require("mongoose");
const Todo = new mongoose.Schema({
  todo: String,
});
module.exports = mongoose.model("Todo", Todo);
