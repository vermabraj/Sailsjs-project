const jwt = require("jsonwebtoken");

module.exports = async function (req, res, next) {
  sails.log.debug("isAuthenticated:", req.session);
  if (req.session && req.session.token) {
    // If the token exists in session, user is authenticated
    return next();
  } else {
    // If no token is found, user is not authenticated
    return res.forbidden("You are not authorized to perform this action.");
  }
};
