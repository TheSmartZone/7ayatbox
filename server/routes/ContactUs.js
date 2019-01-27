const express = require("express");
const router = express.Router();
const contactus = require("../../DataBase/ContactUs");

//getting user input and save in the database
router.route("/submit").post(function(req, res) {
  contactus
    .addMessage(req.body.name, req.body.phone, req.body.message)
    .then(result => {
      res.json(result);
    })
    .catch((msg, err) => {
      console.log(msg, err);
    });
});

module.exports = router;
