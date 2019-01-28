const express = require("express");
const router = express.Router();
const services = require("../../DataBase/Services");

router.use(function(res, req, next) {
  next();
});
//getting categories based on the category provided
router.route("/:category").get(function(req, res) {
  services
    .getAllServices(req.params.category)
    .then(result => {
      res.json(result);
    })
    .catch((msg, err) => {
      console.log(msg, err);
    });
});
router.route("/Recommendation").post(function(req, res) {
  services
    .getRecommendedServices(
      req.body.hallPrice,
      req.body.zafehPrice,
      req.body.djPrice,
      req.body.beautyCentersPrice,
      req.body.flowersPrice,
      req.body.carsPrice
    )
    .then(result => {
      res.json(result);
    })
    .catch((msg, err) => {
      console.log(msg, err);
    });
});
router.route("/deleteService").post(function(req, res) {
  var body = req.body;
  var id = body.id;
  service
    .deleteService(id)
    .then(result => {
      res.send(result);
    })
    .catch((msg, err) => {
      console.log(msg, err);
    });
});
module.exports = router;
