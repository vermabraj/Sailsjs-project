const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ error: "No token provided" });
  }

  jwt.verify(token, "285997d39c7ba5d19d0f7ccd40fd608d", (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: "Invalid token" });
    }

    req.user = decoded.user; // Store the decoded user ID in the request object
    next();
  });
};
