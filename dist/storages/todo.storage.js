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
const todo_model_1 = __importDefault(require("../models/todo.model"));
class TodoStorage {
    constructor() {
        this._model = todo_model_1.default;
        this.getAllTodos = () => __awaiter(this, void 0, void 0, function* () { return this._model.find(); });
        this.getTodoByID = (userId) => __awaiter(this, void 0, void 0, function* () { return this._model.find({ userId }); });
        this.removeTodoByID = (_id, userId) => __awaiter(this, void 0, void 0, function* () { return this._model.findByIdAndRemove({ _id, userId }); });
        this.updateTodoByID = (_id, userId, text, completed) => __awaiter(this, void 0, void 0, function* () {
            const updatedTodo = yield this._model.findOneAndUpdate({ _id, userId }, { text, completed }, { new: true });
            return updatedTodo;
        });
    }
}
exports.default = TodoStorage;
