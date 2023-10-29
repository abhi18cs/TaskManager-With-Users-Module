"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoByID = exports.updateTodoByID = exports.getTodoByID = exports.getTodos = exports.createTodo = void 0;
const todo_model_1 = __importDefault(require("../models/todo.model"));
const todo_storage_1 = __importDefault(require("../storages/todo.storage"));
//create a new Todo
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const { text, completed } = req.body;
    try {
        const newTodo = new todo_model_1.default({ text, completed, userId });
        yield newTodo.save();
        res.json(newTodo);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.createTodo = createTodo;
//get all the Todos
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const todos = yield new todo_storage_1.default().getAllTodos();
        res.json(todos);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getTodos = getTodos;
// Get the Todo by ID
const getTodoByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const todos = yield new todo_storage_1.default().getTodoByID(userId);
        res.json(todos);
    }
    catch (error) {
        res.status(404).json({ error: error });
    }
});
exports.getTodoByID = getTodoByID;
// Update the Todo
const updateTodoByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, todoId } = req.params;
    const { text, completed } = req.body;
    try {
        const updatedTodo = yield new todo_storage_1.default().updateTodoByID(userId, todoId, text, completed);
        res.json(updatedTodo);
    }
    catch (error) {
        res.status(500).json({ "This is the error": error });
    }
});
exports.updateTodoByID = updateTodoByID;
//delete the todo
const deleteTodoByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, todoId } = req.params;
    try {
        const deletedUser = yield new todo_storage_1.default().removeTodoByID(userId, todoId);
        if (!deletedUser) {
            return res.status(404).json({ error: "Todo not found" });
        }
        return res.json({ message: "Todo Deleted" });
    }
    catch (error) {
        return res.status(500).json({ error: "There is some error in deleting " });
    }
});
exports.deleteTodoByID = deleteTodoByID;
