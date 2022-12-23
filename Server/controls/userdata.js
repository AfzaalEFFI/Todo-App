import User from "../model/UserScheme.js/userSchema.js";
import jwt from "jsonwebtoken";
const userdata = (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "token not given" });
  }
  const token = authorization.replace("Bearer", "");
  jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
    if (err) {
      return res
        .status(401)
        .json({ error: "you must bi loged in invalid token" });
    }
    const { _id } = payload;
    User.findById(_id).then((userdata) => {
      res.status(201).send({ message: "user find ", user: userdata });
    });
  });
};
export default userdata;
