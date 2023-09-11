/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const passport = require("passport");
const jwt = require("jsonwebtoken");
module.exports = {
  login: function (req, res) {
    passport.authenticate("local", function (err, user, info) {
      if (err || !user) {
        return res.send({
          message: info.message,
          user: user,
        });
      }
      req.logIn(user, function (err, info) {
        if (err) res.send(err);

        // Generate the JWT token

        // return res.send({
        //   message: res.message,
        //   user: user,
        //   token: token, // Send the token to the client
        // });
      });
      const token = jwt.sign(
        { user: user.id },
        "285997d39c7ba5d19d0f7ccd40fd608d",
        {
          expiresIn: "1h", // set the token expiration time
        }
      );
      req.session.token = token;
      sails.log.debug("Token set in session:", req.session.token);
      return res.send("Login successfull");
    })(req, res);
  },

  logout: function (req, res) {
    req.session.destroy();
    res.send("Logout successfull");
  },
};
