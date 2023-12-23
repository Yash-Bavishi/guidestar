import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
// Will be checked everytime for post and comment request
const authenticationProtect = asyncHandler(async (req, res, next) => {
  const jwtCookie = req.cookies.jwt;
  if (jwtCookie) {
    try {
      const token = jwt.verify(jwtCookie, process.env.JWT_SECRET);
      req.user = await User.findOne({ _id: token.id }).select("-password");
      next();
    } catch (err) {
      res.status(401);
      throw new Error("Invalid Token KING + ", err);
    }
  } else {
    res.status(401);
    throw new Error("No user signed in");
  }
});

export { authenticationProtect };
