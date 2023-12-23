import express, { Router } from "express";
import {
  getUser,
  createUser,
  authenticateUser,
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/", getUser);
userRouter.post("/", createUser);
userRouter.post("/login", authenticateUser);
export default userRouter;
