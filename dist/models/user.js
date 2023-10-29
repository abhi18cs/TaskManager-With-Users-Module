"use strict";
//In models we just store the structure of our todo schema
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//requiring the mongoose
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: String,
    age: Number,
});
const UserModel = mongoose_1.default.model("User", userSchema);
exports.default = UserModel;
