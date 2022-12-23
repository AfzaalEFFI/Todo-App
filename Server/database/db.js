import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.iwkh10k.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database is connected");
  } catch (error) {
    console.log(`error while calling error`, error);
  }
};
export default Connection;
