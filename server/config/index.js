const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const User = require("../../DataBase/User");
// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
  console.log("*** serializeUser called, user: ");
  console.log(user); // the whole raw user object!
  console.log("---------");
  done(null, { _id: user.id });
});

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
  console.log("DeserializeUser called", id);
  User.findUserById(id._id)
    .then(user => {
      console.log("*** Deserialize user, user:");
      console.log(user);
      console.log("--------------");
      done(null, user);
    })
    .catch(err => {
      console.log("DeserializeUser ERROR", err);
    });
});

//  Use Strategies
passport.use(LocalStrategy);

module.exports = passport;
