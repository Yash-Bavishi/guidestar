import jwt from "jsonwebtoken";
const decodeToken = (req) => {
  if (req.cookies.jwt !== null) {
    const encodedToken = req.cookies.jwt;
    const decodedToken = jwt.verify(encodedToken, process.env.JWT_SECRET);
    console.log("This is decoded token", decodedToken);
    return decodedToken;
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
};

export default decodeToken;
