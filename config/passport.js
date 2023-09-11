
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
  User.findOne({ id: id }).exec(function (err, user) {
    cb(err, user);
  });
});

passport.use(
  new LocalStrategy(
    {
      email: "email",
      password: "password",
    },
    function (email, password, cb) {
      User.findOne({ email: email }).exec(function (err, user) {
        if (err) return cb(err);
        if (!user) return cb(null, false, { message: "Email not found" });

        bcrypt.compare(password, user.password, function (err, res) {
          if (err) return cb(err);
          if (!res) return cb(null, false, { message: "Invalid Password" });
          return cb(null, user, { message: "Login successful" });
        });
      });

     
    }
  )
);
