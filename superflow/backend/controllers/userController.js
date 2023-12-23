import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import getDate from "../utils/getDate.js";
import jwt from "jsonwebtoken";
import generateToken from "../utils/generateToken.js";

/*
@desc: find all users
@scope: development
@route: GET /api/user
*/
const getUser = asyncHandler(async (req, res) => {
  if (process.env.NODE_ENV === "development") {
    res.status(200).send("soon");
  } else {
    throw new Error("Not permitted");
  }
});

/*
@desc: create a user
@scope: production
@route: POST /api/user
 */
const createUser = asyncHandler(async (req, res) => {
  const { email, password, name, subscribed } = req.body;
  const currData = getDate();

  let user = await User.findOne({ email: email });

  if (user) {
    res.status(401);
    throw new Error("User already Exists");
  }

  user = {
    email: email,
    password: password,
    name: name,
    lastLogin: new Date(),
    subscribed: subscribed,
  };

  const newUser = await User.create(user);
  if (newUser) {
    generateToken(res, newUser._id);
  } else {
    res.status(500);
    throw new Error("Internal Server Error token issue");
  }
});

/*
@desc: authenticate a user
@scope: production
@route : POST /api/user/login
*/
const authenticateUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user !== null) {
    if (await user.matchPassword(password)) {
      generateToken(res, user._id);
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  } else {
    res.status(400);
    throw new Error("No User Found");
  }
});

export { getUser, createUser, authenticateUser };
