import express, { Request, Response, NextFunction } from "express";
import * as todoController from "../controllers/todo.controller";

const router = express.Router();

// Create a new todo for a particular user
router.post("/users/:userId/todos", todoController.createTodo);

// Get all the todos items for a particular user
router.get("/users/:userId/todos", todoController.getTodos);

// Get all the details of that particular todo
router.get("/users/:userId/todos/:todoId", todoController.getTodoByID);

//Update the todo
router.put("/users/:userId/todos/:todoId", todoController.updateTodoByID);

//Delete the todo
router.delete("/users/:userId/todos/:todoId", todoController.deleteTodoByID);

export default router;
