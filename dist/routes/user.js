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
//importing router from express
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../models/user"));
const router = express_1.default.Router();
//Create a new user
router.post("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age } = req.body;
    try {
        const user = new user_1.default({ name, age });
        yield user.save();
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ "This is the error": error });
    }
}));
//Get the user by id
router.get("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield user_1.default.findById(id);
        res.json(user);
    }
    catch (error) {
        res.status(404).json({ "This is the error": error }); //user not found
    }
}));
//Get all the users
router.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ "This is the error": error });
    }
}));
//Update the whole user
router.put("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; //destructers=={}
    try {
        const { name, age } = req.body;
        const updatedUser = yield user_1.default.findByIdAndUpdate(id, { name, age }, { new: true });
        res.json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ "This is the error": error });
    }
}));
//patch the user
// Update specific fields of a task
router.patch("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, age } = req.body;
    try {
        const user = yield user_1.default.findByIdAndUpdate(id, { name, age }, { new: true });
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ "This is the error": error });
    }
}));
//Delete the user
router.delete("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedUser = yield user_1.default.findByIdAndRemove(id);
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ message: "User Deleted" });
    }
    catch (error) {
        res.status(500).json({ error: "There is some error in deleting " });
    }
}));
//exporting our route
exports.default = router;
