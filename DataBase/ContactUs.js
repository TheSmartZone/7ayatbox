const pool = require("./ConnectionPool");

// creating a new message in db
const addMessage = (name, phone, message, cb) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, con) {
      if (err) reject("connection err", err);
      console.log("Connected!");
      var sql = `INSERT INTO contact_us (name, phone, message) VALUES ("${name}","${phone}","${message}")`;
      con.query(sql, function(err, result) {
        if (err) reject("query error", err);
        console.log("1 record inserted");
        resolve(result);
        con.release(); //release the connection to the pool
      });
    });
  });
};

module.exports.addMessage = addMessage;
