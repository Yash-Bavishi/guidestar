const notFound = (req, res, next) => {
  const error = new Error(`Not Found ${req.orginalUrl}`);
  res.status(400);
  next(error);
};

const errorHandler = async (error, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = error.message;

  if (error.name === "CastError" || error.name === "ObjectId") {
    statusCode = 401;
    message = "Resource not found";
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : error.stack,
  });
};

export { notFound, errorHandler };
