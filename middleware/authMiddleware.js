const authMiddleware = (req, res, next) => {
  console.log("Middleware Running");

  next();
};

module.exports = authMiddleware;