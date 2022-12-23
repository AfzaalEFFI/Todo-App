import User from "../model/UserScheme.js/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if ((email, password)) {
      const user = await User.findOne({ email });
      if (user != null) {
        const isMatch = await bcrypt.compare(password, user.password);
        if ((user.email === email, isMatch)) {
          const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY, {});
          const { _id, email } = user;
          res.status(201).send({
            status: "success",
            message: "login sucess",
            token,
            userdata: { _id, email },
          });
        } else {
          res.status(400).send({ error: " Invalid credentials" });
        }
      } else {
        res.status(400);
      }
    } else {
      res
        .status(400)
        .send({ status: "failled", message: "please fill the form" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: "failled", message: "unable to login" });
  }
};
export default LoginUser;
