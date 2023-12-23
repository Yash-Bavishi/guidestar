import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Temporary get from oAuth
  name: {
    type: String,
    required: true,
  },
  lastLogin: {
    type: Date,
    required: true,
  },
  // [active, inactive]
  subscribed: {
    type: Boolean,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (userPassword) {
  return await bcrypt.compare(userPassword, this.password);
};

const User = mongoose.model("user", userSchema);

export default User;
