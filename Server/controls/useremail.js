import User from "../model/UserScheme.js/userSchema.js";

const Useremail = async (req, res) => {
  try {
    const user = await User.find({});
    const { email, data } = user;
    res.status(201).send({ message: "data found ", userdata: { email, data } });
  } catch (error) {
    console.log(error);
  }
};
export default Useremail;
