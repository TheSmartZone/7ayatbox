const User = require("../../DataBase/User");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
  { usernameField: "email" },
  (email, password, done) => {
    // Match user
    User.checkUser(email, function(results) {
      if (results.length > 0) {
        // Match password
        User.checkPassword(email, password, function(isMatch, result, err) {
          if (err) throw err;
          if (isMatch) {
            return done(null, result);
          } else {
            return done(null, false, { message: "Password incorrect" });
          }
        });
      } else {
        return done(null, false, { message: "The Email is not registered" });
      }
    });
  }
);

module.exports = strategy;
