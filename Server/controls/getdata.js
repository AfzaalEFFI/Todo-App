import list from "../model/list.js";
import User from "../model/UserScheme.js/userSchema.js";

const getdata = async (req, res) => {
  const { _id } = req.headers;

  // User.findById({ email: email })
  User.findById(_id)
    .then((userdata) => {
      if (!userdata) {
        return res.status(400).json({ error: "user  data not found" });
      } else {
        const { name, profilepic, data } = userdata;
        res
          .status(201)
          .send({ message: "data send", userdata: name, profilepic, data });
      }
    })
    .catch((err) => {
      console.log("error fetching data", err);
    });
};
export default getdata;
