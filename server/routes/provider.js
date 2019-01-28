const express = require("express");
const router = express.Router();
const provider = require("../../DataBase/Provider");
const service = require("../../DataBase/Services");

router.route("/signup").post(function(req, res) {
  var body = req.body;
  var email = body.email;
  var password = body.password;
  var name = body.name;
  provider.checkProvider(email).then(result => {
    if (result.length > 0) {
      res.status(500).send("Username already exists");
    } else {
      provider.addProvider(name, email, password, function(err, userId) {
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
router.route("/addService").post(function(req, res) {
  var body = req.body;
  var title = body.title;
  var description = body.description;
  var price = body.price;
  var imageUrl = body.imageUrl;
  var providerId = body.providerId;
  var categoryId = body.categoryId;
  var rate = body.rate;
  var capicity = body.capicity;
  var location = body.location;

  service
    .addService(
      capicity,
      description,
      imageUrl,
      location,
      price,
      rate,
      title,
      providerId,
      categoryId
    )
    .then(result => {
      res.send(true);
    })
    .catch((msg, err) => {
      console.log(msg, err);
    });
});

router.route("/getProviderServices").post(function(req, res) {
  var body = req.body;
  var providerId = body.providerId;
  service.getProviderServices(
    providerId,

    function(err, result) {
      console.log("my result", result);
      if (err) console.log("err selecting provider services");
      res.send(result);
    }
  );
});

router.route("/login").post(function(req, res) {
  provider
    .checkPassword(req.body.email, req.body.password)
    .then(result => {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(500).send("login error");
      }
    })
    .catch((msg, err) => {
      console.log(msg, err);
    });
});

module.exports = router;
