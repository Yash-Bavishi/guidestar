import asyncHandler from "express-async-handler";
import Project from "../models/projectModel.js";

const projectMiddleware = asyncHandler(async (req, res, next) => {
  const { projectId, apiKey } = req.body;
  if (projectId === undefined && apiKey === undefined) {
    res.status(401);
    throw new Error("Authentication Failed");
  } else {
    if (projectId !== undefined) {
      req.project = await Project.findOne({ _id: projectId }).select(
        "-api_key",
      );
      if (req.project !== undefined && req.project !== null) {
        res.status(200).send("found");
        next();
      } else {
        res.status(404).send("no project found");
      }
    } else if (apiKey !== undefined) {
      req.project = await Project.find({ api_key: apiKey }).select("-api_key");
      if (req.project !== undefined && req.project !== null) {
        console.log(req.project);
        next();
      } else {
        res.status(404).send("no project found");
      }
    }
  }
});

export default projectMiddleware;
