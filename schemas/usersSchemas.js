import Joi from "joi";

import { emailRegExp } from "../constants/emailRegExp.js";

export const registerUserSchema = Joi.object({
  name: Joi.string().min(2).required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegExp).required(),
});

export const emailUserSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
});

export const loginUserSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().pattern(emailRegExp).required(),
});

export const refreshUserSchema = Joi.object({
  refreshToken: Joi.string().required().messages({
    "any.required": "refreshToken is required",
    "string.base": "The refreshToken must be a text string.",
  }),
});
