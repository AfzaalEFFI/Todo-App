import User from "../model/UserScheme.js/userSchema.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const addUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).send({ error: "please fill the form first" });
  }
  const user = await User.findOne({ email: email });

  if (user) {
    res.status(400).send({ error: "user already exists" });
  }
  if ((name, email, password)) {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const user = new User({
      name: name,
      email: email,
      password: hashPassword,
    });
    try {
      await user.save();
      const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY, {});

      res.status(201).send({ message: "user added successfully", token });
    } catch (error) {
      console.log("error while enter user", error);
    }
  }
};

export default addUser;
