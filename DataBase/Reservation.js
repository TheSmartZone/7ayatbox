const pool = require("./ConnectionPool");

const addReservation = (userID, providerID) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, con) {
      if (err) reject("connection err", err);
      console.log("Connected!");
      var sql = `INSERT INTO reservations (userID,providerID) VALUES 
        (${userID},${providerID})`;
      con.query(sql, function(err, result) {
        if (err) reject("query error", err);
        console.log("1 record inserted");
        resolve(result);
        con.release(); //releasing the connection back to the pool
      });
    });
  });
};
const addReservationDetails = (cartDetails, reservationID) => {
  return new Promise((resolve, reject) => {
    cartDetails.forEach((ele, index) => {
      if (index === cartDetails.length - 1) {
        resolve();
      }
      pool.getConnection((err, con) => {
        if (err) reject("connection err", err);
        console.log("Connected!");

        var sql = `INSERT INTO reservationDetails (reservationId,serviceId) VALUES 
        (${reservationID},${ele.serviceID})`;
        con.query(sql, function(err, result) {
          if (err) reject("query error", err);
          console.log("1 record inserted");
          con.release(); //releasing the connection back to the pool
        });
      });
    });
  });
};
const getUserReservationDetails = userID => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, con) {
      if (err) reject("connection err", err);
      console.log("Connected!");
      var sql = `SELECT T4.name AS providerName,title,description,imageUrl,capacity,location,price,rate  FROM reservations as T1 JOIN reservationDetails AS T2 ON T1.id = T2.reservationID JOIN services AS T3 ON T3.id = T2.serviceID JOIN providers as T4 ON T4.id = T1.providerID WHERE (T1.userID = "${userID}")`;
      con.query(sql, function(err, result) {
        if (err) reject("query error", err);
        resolve(result);
        con.release(); //releasing the connection back to the pool
      });
    });
  });
};

module.exports.addReservation = addReservation;
module.exports.addReservationDetails = addReservationDetails;
module.exports.getUserReservationDetails = getUserReservationDetails;
