import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route";
import todoRouter from "./routes/todo.route";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const MONGO_URI = process.env.MONGO_URI!;
//connection to mongodb
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDb"))
  .catch((err) => {
    console.error("Error in Connecting MongoDb", err);
  });

//middlewares
app.use(express.json());

//require a router
app.use(userRouter);
app.use(todoRouter);

app.listen(3000, () => {
  console.log("The server is started at 3000");
});
