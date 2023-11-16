import dotenv from 'dotenv'
import express from "express";
import mongoose from 'mongoose';
import authRouter from "./controllers/auth.js"
import userRouter from "./routes/userRoutes.js"
const app = express();

dotenv.config()


mongoose.connect(process.env.DB_PATH);

const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => {
  console.log("Connected to Mongoose");
});

app.use(express.json())

app.listen(process.env.PORT || 3005);

app.use("/", authRouter);
app.use ("/users", userRouter);

