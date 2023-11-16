import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: false },
  email: { type: String, required: true },
  alias: { type: String, required: false },
  contact: { type: Number, required: true },
  password: { type: String, required: true },
  avatar: { type: Buffer, required: false },
  createdAt: { type: Date, required: false, default: Date.now },
  updatedAt : {type : Date, required: false , default : Date.now}
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
