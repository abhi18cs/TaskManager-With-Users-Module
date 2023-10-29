"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Create the Todo schema
const todoSchema = new mongoose_1.default.Schema({
    text: String,
    completed: Boolean,
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
});
// Create the Todo model
const TodoModel = mongoose_1.default.model("todos", todoSchema);
exports.default = TodoModel;
