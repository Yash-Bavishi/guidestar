import asyncHandler from "express-async-handler";
import Comment from "../models/commentModel.js";
import Screenshot from "../models/screenShotModel.js";
import fs from "fs";

const getAllComments = asyncHandler(async (req, res) => {
  console.log("hello");
});

/*
 @desc create a comment
 @scope flutter and web (production)
 @route POST /api/comment
 */
const createComment = asyncHandler(async (req, res) => {
  console.log("receve");
  const project = req.project;
  // Check for request parameters
  if (req.body.content === undefined || req.body.screenshot === undefined) {
    res.setStatus(400).send("end");
    throw new Error("Bad request");
  } else {
    // Check for existing comments for project
    const comments = await Comment.find({ project_id: project._id });
    console.log(project[0]._id);
    if (comments.length <= 0) {
      const req_ss = req.body.screenshot;
      const local_ss = fs.readFileSync(
        "/home/kali/Documents/guidestar/superflow/backend/images/PACS.drawio.png",
      );
      const ss = process.env.NODE_ENV === "developement" ? local_ss : req_ss;
      const screenShot = await Screenshot.create({
        project_id: project[0]._id,
        screenshot: ss,
      });
      console.log("this", req.user._id);
      const comment = {
        screenshot_shot_id: screenShot._id,
        content: req.body.content,
        user_id: req.user._id,
        project_id: project[0]._id,
      };
      console.log(req.project);
      console.log(comment);
      const createdComment = await Comment.create({
        screen_shot_id: screenShot._id,
        content: req.body.content,
        user_id: req.user._id,
        project_id: project[0]._id,
      });
      res.status(200).json({
        message: createdComment._id,
      });
    } else {
      console.log("Something");
      res.status(200).send("SADS");
    }
  }
});

/*
 @desc: update priority
 @scope: developement and production
 @route: PUT /api/comment
 */

const updateComment = asyncHandler(async (req, res) => {
  if (!req.body.id) {
    res.send("Did not found").sendStatus(200);
  } else {
    const comment = await Comment.findById(req.body.id);
    const local_ss = fs.readFileSync(
      "/home/kali/Documents/guidestar/superflow/backend/images/PACS.drawio.png",
    );
    console.log(local_ss);
    const req_ss = req.body.screenshot;
    const ss = process.env.NODE_ENV === "development" ? local_ss : req_ss;
    const screenShot = await Screenshot.create({
      project_id: req.project[0]._id,
      screenshot: ss,
    });
    const updatedComment = await Comment.findByIdAndUpdate(
      req.body.id,
      {
        screen_shot_id: screenShot._id,
        content: req.body.content ? req.body.content : comment.content,
        user_id: req.user._id,
        status: req.body.status ? req.body.status : comment.status,
        priority: req.body.priority ? req.body.priority : comment.priority,
        build_version: req.body.build_version
          ? req.body.build_version
          : comment.build_version,
      },
      { runValidators: true },
    );
    console.log(updatedComment);
    res.status(200).send("DEKHO");
  }
});

/*
 @desc: Time to delete 
 @scope: production and development
 @route: DEL /api/comment {commentId: in request}
 */

const deleteComment = asyncHandler(async (req, res) => {
  if (!req.body.id) {
    res.status(400);
    throw new Error("Bad request");
  }

  const commentToDelete = await Comment.findByIdAndDelete(req.body.id);
  res.status(200).send(commentToDelete._id);
});

export { getAllComments, createComment, updateComment, deleteComment };
