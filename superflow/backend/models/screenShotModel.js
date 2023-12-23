import mongoose from "mongoose";

const screenshotSchema = new mongoose.Schema({
  screenshot: {
    type: Buffer,
    required: true,
  },
  project_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

const Screenshot = mongoose.model("screenshot", screenshotSchema);

export default Screenshot;
