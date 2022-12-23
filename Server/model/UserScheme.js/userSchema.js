import mongoose from "mongoose";

const adduser = mongoose.Schema({
  name: "string",
  email: "string",
  password: "string",
  profilepic: {
    type: String,
    default: "",
  },
  data: {
    type: Array,
    default: [],
  },
});

const User = mongoose.model("User", adduser);

export default User;
