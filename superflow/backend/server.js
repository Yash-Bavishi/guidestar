import dotenv from "dotenv";
import express from "express";
import userRouter from "./routes/userRoute.js";
import projectRouter from "./routes/projectRoute.js";
import commentRouter from "./routes/commentRoute.js";
import mongooseConnection from "./config/db.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import { authenticationProtect } from "./middlewares/authenticationMiddleware.js";
import cookieParser from "cookie-parser";
import projectMiddleware from "./middlewares/projectMiddleware.js";
// {Always on top }Initalize dotenv configuration
dotenv.config();

// Connecting database
mongooseConnection();

const app = express();
//
// middle ware for accepting json and urlEncoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser to allow req.body in request
app.use(cookieParser());

// user Routes
app.use("/api/user", userRouter);
// project Routes
app.use("/api/project", authenticationProtect, projectRouter);
// comment Routes
app.use(
  "/api/comment",
  authenticationProtect,
  projectMiddleware,
  commentRouter,
);

app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => {
  console.log("Starting mongoose connect");
});
