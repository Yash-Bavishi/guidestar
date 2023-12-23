import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const collabSchema = new mongoose.Schema({
  objectId: mongoose.Types.ObjectId,
});

const tempSchema = new mongoose.Schema({
  tp: [String],
});

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  creator_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  collaborators: {
    type: [mongoose.Types.ObjectId],
    required: false,
  },
  archived_index: {
    type: Boolean,
    default: false,
  },
  api_key: {
    type: String,
    required: true,
  },
  /*
  build_versions: {
    type: [String],
    required: true,
  },
  */
});

projectSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.api_key = await bcrypt.hash(this.api_key, salt);
});

const Project = mongoose.model("project", projectSchema);
export default Project;
