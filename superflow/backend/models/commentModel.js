import mongoose from "mongoose";
import "mongoose-type-url";

const commentScehma = new mongoose.Schema({
  screen_shot_id: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  project_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "inprogress", "complete"],
    default: "pending",
  },
  priority: {
    type: String,
    enum: ["red", "yellow", "green"],
    default: "red",
  },
  screenshot: {
    type: mongoose.SchemaTypes.Url,
  },
  build_version: {
    type: String,
  },
});

const Comment = mongoose.model("comment", commentScehma);
export default Comment;
