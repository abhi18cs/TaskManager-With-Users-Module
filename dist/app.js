"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const todo_route_1 = __importDefault(require("./routes/todo.route"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const MONGO_URI = process.env.MONGO_URI;
//connection to mongodb
mongoose_1.default
    .connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDb"))
    .catch((err) => {
    console.error("Error in Connecting MongoDb", err);
});
//middlewares
app.use(express_1.default.json());
//require a router
app.use(user_route_1.default);
app.use(todo_route_1.default);
app.listen(3000, () => {
    console.log("The server is started at 3000");
});
