import { Request, Response } from "express";
import Todo from "../models/todo.model";
import TodoStorage from "../storages/todo.storage";

// Create a new Todo
export const createTodo = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { text, completed } = req.body;
  try {
    const newTodo = new Todo({ text, completed, userId });
    await newTodo.save();
    res.json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Get all the Todos for a specific user
export const getTodos = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const todos = await new TodoStorage().getAllTodos(userId);
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Get a specific Todo
export const getTodoByID = async (req: Request, res: Response) => {
  const { userId, todoId } = req.params;
  try {
    const todo = await new TodoStorage().getTodoByID(userId, todoId);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error });
  }
  // Add a default return statement to satisfy TypeScript
  return res.status(500).json({ error: "An unexpected error occurred" });
};

// Update a Todo for a user by ID
export const updateTodoByID = async (req: Request, res: Response) => {
  const { userId, todoId } = req.params;
  const { text, completed } = req.body;
  try {
    const updatedTodo = await new TodoStorage().updateTodoByID(
      userId,
      todoId,
      text,
      completed
    );
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Delete a Todo for a user by ID
export const deleteTodoByID = async (req: Request, res: Response) => {
  const { userId, todoId } = req.params;
  try {
    const deletedTodo = await new TodoStorage().removeTodoByID(userId, todoId);
    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    return res.json({ message: "Todo Deleted" });
  } catch (error) {
    return res.status(500).json({ error: "There is some error in deleting" });
  }
};
