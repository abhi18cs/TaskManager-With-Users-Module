import { Request, Response, NextFunction } from "express";
import Joi from "joi"; // Import Joi

const userSchema = Joi.object({
  name: Joi.string().max(100).required(),
  age: Joi.number()
    .integer()
    .min(16)
    .message("Age is below 16, please enter a valid age")
    .max(49)
    .message("Age is above 49, please enter a valid age")
    .required(),
});

export const addUserValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const value = await userSchema.validateAsync(req.body);
    console.log("All fields are verified");
    return next();
  } catch (error) {
    console.error("There is some error in the user.validation file");
    return res.status(400).json({
      success: 0,
      message: (error as Error).message,
    });
  }
};

export default addUserValidation;
