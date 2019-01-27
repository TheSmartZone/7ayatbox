const express = require("express");
const router = express.Router();
const user = require("../../DataBase/User");
const passport = require("passport");
//handling user signup route
router.route("/signup").post(function(req, res) {
  const { email, password, name } = req.body;
  req.session.username = name;
  user.checkUser(email, function(result) {
    if (result.length > 0) {
      res.status(500).send("Username already exists");
    } else {
      user.addUser(name, email, password, function(err, userId) {
        if (err) {
          console.log("errr", err);
          res.status(500).send("db error");
        } else {
          res.send({ id: userId, name: name });
        }
      });
    }
  });
});

router.post(
  "/login",
  function(req, res, next) {
    console.log("routes/user.js, login, req.body: ");
    console.log(req.body);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("logged in", req.user);
    var userInfo = {
      id: req.user.id,
      name: req.user.name
    };
    res.send(userInfo);
  }
);
router.get("/", (req, res, next) => {
  console.log("===== user!!======");
  console.log(req.user);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});
router.post("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
  } else {
    res.send({ msg: "no user to log out" });
  }
});

module.exports = router;
