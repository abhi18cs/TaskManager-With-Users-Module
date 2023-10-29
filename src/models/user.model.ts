//In models we just store the structure of our todo schema

//requiring the mongoose
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const UserModel = mongoose.model("users", userSchema);

export default UserModel;
