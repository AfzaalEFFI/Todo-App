// import list from "../model/list.js";
import User from "../model/UserScheme.js/userSchema.js";

const listdata = async (req, res) => {
  const { data, _id } = req.body;
  if (data === "" && email === "") {
    res.status(400).json({ error: "please add something" });
  }

  User.findById(_id)
    .then((saveData) => {
      if (!saveData) {
        return res.status(400).json({ error: "inValid data" });
      }
      saveData.data.push(data);
      saveData
        .save()
        .then((user) => {
          res.status(201).json({ message: "data added" });
        })
        .catch((err) => {
          res.status(401).json({ err: "error adding data" });
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
export default listdata;
