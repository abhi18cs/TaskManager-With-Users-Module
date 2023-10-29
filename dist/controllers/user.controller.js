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
exports.deleteUser = exports.updateUserByID = exports.getUsers = exports.getUserByID = exports.createUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model")); // Import the User model
const user_storage_1 = __importDefault(require("../storages/user.storage"));
// Create a new user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age } = req.body;
    try {
        const user = new user_model_1.default({ name, age });
        yield user.save();
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ "This is the error": error });
    }
});
exports.createUser = createUser;
// Get the user by ID
const getUserByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield new user_storage_1.default().getUserByID(id);
        res.json(user);
    }
    catch (error) {
        res.status(404).json({ "This is the error": error }); // User not found
    }
});
exports.getUserByID = getUserByID;
// Get all users
const getUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield new user_storage_1.default().getAllUsers();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ "This is the error": error });
    }
});
exports.getUsers = getUsers;
// Update the whole user
const updateUserByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const { name, age } = req.body;
        const updatedUser = yield new user_storage_1.default().updateUserByID(id, name, age);
        res.json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ "This is the error": error });
    }
});
exports.updateUserByID = updateUserByID;
// Delete the user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedUser = yield new user_storage_1.default().findByIdAndRemove(id);
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json({ message: "User Deleted" });
    }
    catch (error) {
        return res.status(500).json({ error: "There is some error in deleting " });
    }
});
exports.deleteUser = deleteUser;
