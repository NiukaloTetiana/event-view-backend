import { User } from "../models/User.js";

export const findUser = async (filter) => {
  const user = await User.findOne(filter);

  return user;
};

export const createUser = async (body) => {
  const newUser = await User.create(body);

  return newUser;
};
