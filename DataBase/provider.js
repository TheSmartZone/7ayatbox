const pool = require("./ConnectionPool");
const bcrypt = require("bcryptjs");
const SALT_WORK_FACTOR = 10;

const checkProvider = email => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, con) {
      if (err) reject("CheckProvider connection err", err);
      con.query(`SELECT * FROM providers Where email= ("${email}")`, function(
        err,
        results
      ) {
        if (err) reject("CheckProvider query error", err);
        //results is the returned array of objects
        resolve(results);
        con.release();
      });
    });
  });
};

const addProvider = (name, email, password) => {
  return new Promise((resolve, reject) => {
    hashPassword(password, function(err, hashedPassword) {
      if (err) reject("HashPassword Error", err);
      pool.getConnection(function(err, con) {
        if (err) reject("connection err", err);
        console.log("Connected!");
        var sql = `INSERT INTO providers (name, password,email) VALUES ("${name}","${hashedPassword}","${email}")`;
        con.query(sql, function(err, result) {
          if (err) console.log("query error", err);
          console.log("1 record inserted");
          resolve(result.insertId);
          con.release(); //releasing the connection back to the pool
        });
      });
    });
  });
};
//generating hash password using bcrypt
const hashPassword = function(password, cb) {
  bcrypt.hash(password, SALT_WORK_FACTOR, function(err, hash) {
    if (err) return cb(err, null);
    cb(null, hash);
  });
};
//checking login password with database
const checkPassword = (email, password) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, con) {
      if (err) reject("CheckPassword connection err", err);
      con.query(
        `SELECT id,name,password FROM providers Where email = "${email}"`,
        function(err, results) {
          if (err) reject("CheckPassword query error", err);
          //results is the returned array of objects
          if (results.length > 0) {
            bcrypt.compare(password, results[0].password, function(
              err,
              isMatch
            ) {
              if (err) return reject("Compare Error", err);
              if (isMatch) {
                resolve({ id: results[0].id, name: results[0].name });
              } else {
                resolve(isMatch);
              }
            });
          } else {
            resolve(false);
          }
          con.release();
        }
      );
    });
  });
};
module.exports.checkProvider = checkProvider;
module.exports.checkPassword = checkPassword;
module.exports.addProvider = addProvider;
