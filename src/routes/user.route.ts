import express from "express";
import * as userController from "../controllers/user.controller"; // Import the route handlers
import addUserValidation from "../Validation/users/user.valdation";

const router = express.Router();

router.post("/users", addUserValidation, userController.createUser);

router.get("/users/:id", userController.getUserByID);
router.get("/users", userController.getUsers);
router.put("/users/:id", userController.updateUserByID);
router.delete("/users/:id", userController.deleteUser);

//exporting our route
export default router;
