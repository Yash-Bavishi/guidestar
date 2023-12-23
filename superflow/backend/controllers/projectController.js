import Project from "../models/projectModel.js";
import User from "../models/userModel.js";
import decodeToken from "../utils/decodeToken.js";
import { v4 as uuid } from "uuid";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
/*
@desc: create a new project
@scope: production
@route: POST /api/project 
*/
const createProject = async (req, res) => {
  // Creator Id comes from cookies;
  const { name } = req.body;
  let collaborators = req.body.collaborators;
  const token = decodeToken(req);
  const userId = token.id;
  const user = await User.findOne({ _id: userId });
  let collabUserId = [];
  for (let i = 0; i < collaborators.length; i++) {
    let temp = await User.findOne({ email: collaborators[i] });
    if (temp === null) {
      res.status(404);
      throw new Error("User not found");
      break;
    }
    collabUserId.push(temp._id);
  }
  if (user) {
    const creator_id = user._id;
    if (req.body.archived !== null) {
      const archived_index = req.body.archived;
    } else {
      const archived_index = false;
    }
    const api_key = uuid();
    collabUserId.push(user._id);
    const project = {
      name,
      creator_id,
      collaborators: collabUserId,
      archived: req.body.archived !== null ? req.body.archived : false,
      api_key: api_key,
    };
    const newProject = await Project.create(project);
    res.status(200).json({ msg: "soon" });
  } else {
    res.status(404);
    throw new Error("No user found");
  }
};

/*
@desc: get a project
@scope: production
@route: POST /api/project 
*/

const getProjects = asyncHandler(async (req, res) => {
  const some = req.user._id;
  // const projects = await Project.find({ creator_id: req.user._id });
  const projects = await Project.find({
    collaborators: req.user._id,
  });
  if (projects.length > 0 && typeof projects !== undefined) {
    res.status(200).send(projects);
  } else {
    res.status(404).send("not found");
  }
});

export { createProject, getProjects };
