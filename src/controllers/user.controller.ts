import { Request, Response } from "express";
import User from "../models/user.model"; // Import the User model
import UserStorage from "../storages/user.storage";

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  const { name, age } = req.body;
  try {
    const user = new User({ name, age });
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ "This is the error": error });
  }
};

// Get the user by ID
export const getUserByID = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await new UserStorage().getUserByID(id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ "This is the error": error }); // User not found
  }
};

// Get all users
export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await new UserStorage().getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ "This is the error": error });
  }
};

// Update the whole user
export const updateUserByID = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const { name, age } = req.body;
    const updatedUser = await new UserStorage().updateUserByID(id, name, age);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ "This is the error": error });
  }
};

// Delete the user
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedUser = await new UserStorage().findByIdAndRemove(id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json({ message: "User Deleted" });
  } catch (error) {
    return res.status(500).json({ error: "There is some error in deleting " });
  }
};
