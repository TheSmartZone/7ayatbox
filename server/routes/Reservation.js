const express = require("express");
const router = express.Router();
const Reservation = require("../../DataBase/Reservation");

router.use(function(res, req, next) {
  next();
});

router.route("/addReservation").post(function(req, res) {
  var body = req.body;
  var userID = body.userID;
  var providerId = body.providerID;
  var cartDetails = body.cartDetails;

  Reservation.addReservation(userID, providerId)
    .then(result => {
      Reservation.addReservationDetails(
        cartDetails,
        result.insertId,
        function() {
          res.send(true);
        }
      );
    })
    .catch((msg, err) => {
      console.log(msg, err);
    });
});
router.route("/userReservation").get(function(req, res) {
  Reservation.getUserReservationDetails(req.query.userId)
    .then(result => {
      res.json(result);
    })
    .catch((msg, err) => {
      console.log(msg, err);
    });
});

module.exports = router;
