import { Router } from "express";
import {
  createComment,
  deleteComment,
  getAllComments,
  updateComment,
} from "../controllers/commentController.js";
const commentRouter = Router();

// Get all comments
commentRouter.get("/", getAllComments);

// Post create comment
commentRouter.post("/", createComment);

// Update commnet
commentRouter.put("/", updateComment);

// Delete comment
commentRouter.delete("/", deleteComment);

export default commentRouter;
