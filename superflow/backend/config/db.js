import mongoose from "mongoose";

const mongooseConnection = async () => {
  console.log(typeof process.env.MONGO_URI);
  await mongoose
    .connect(process.env.MONGO_URI, { dbName: "guidestar" })
    .catch((err) => console.log(err));
  console.log("connection successful ig ");
};

export default mongooseConnection;
