  // middleware/logger.js

  // Custom middleware to log incoming requests
  const logger = (req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next(); // Pass control to the next middleware function
  };

  module.exports = logger;