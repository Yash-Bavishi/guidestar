import jwt from "jsonwebtoken";

const generateToken = async (res, userId) => {
  const user = { id: userId.toJSON() };
  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  res.status(200).send("soon");
};

export default generateToken;
