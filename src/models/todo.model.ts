import mongoose from "mongoose";

// Create the Todo schema
const todoSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

// Create the Todo model
const TodoModel = mongoose.model("todos", todoSchema);

export default TodoModel;
