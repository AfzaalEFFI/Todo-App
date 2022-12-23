import User from "../model/UserScheme.js/userSchema.js";

const removeitem = async (req, res) => {
  const { list, _id } = req.body;

  User.findById(_id)
    .then((saveData) => {
      if (!saveData) {
        return res.status(400).json({ error: "inValid data" });
      }
      saveData.data.pull(list);
      saveData
        .save()
        .then((user) => {
          res.status(201).json({ message: "task deleted" });
        })
        .catch((err) => {
          res.status(401).json({ err });
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
export default removeitem;
