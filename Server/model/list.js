import mongoose, { Schema } from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const todolist = mongoose.Schema({
  _userID: Number,
  data: String,
});
// autoIncrement.initialize(mongoose.connection);
// todolist.plugin(autoIncrement.plugin, "list");

const list = mongoose.model("list", todolist);
export default list;
