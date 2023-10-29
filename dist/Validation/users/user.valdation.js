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
exports.addUserValidation = void 0;
const user_schema_1 = __importDefault(require("../users/user.schema"));
const addUserValidation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const value = yield user_schema_1.default.users.validate(req.body);
        if (value.error) {
            return res.status(400).json({
                success: 0,
                message: value.error.details[0].message,
            });
        }
        else {
            next();
        }
    }
    catch (error) {
        console.error("There is some error in the user.validation file");
        next(error);
    }
});
exports.addUserValidation = addUserValidation;
