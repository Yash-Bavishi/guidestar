import {
  createProject,
  getProjects,
} from "../controllers/projectController.js";
import { Router } from "express";
import { authenticationProtect } from "../middlewares/authenticationMiddleware.js";
const projectRouter = Router();

projectRouter.post("/", authenticationProtect, createProject);
projectRouter.get("/", authenticationProtect, getProjects);

export default projectRouter;
