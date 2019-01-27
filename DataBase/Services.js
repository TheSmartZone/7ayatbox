const pool = require("./ConnectionPool");

//getting all the services for a selected category
const getAllServices = categoryName => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, con) {
      if (err) reject("connection err", err);
      console.log("Connected!");
      var sql = `SELECT capacity,description,imageUrl,location,price,rate,title,providerID,categoryID,T1.id as serviceID, T3.name AS providerName FROM services AS T1 JOIN categories AS T2 ON T1.categoryID = T2.id JOIN providers AS T3 ON T1.providerID = T3.id WHERE T2.name = "${categoryName}" ORDER BY T1.price`;
      con.query(sql, function(err, result) {
        if (err) reject("query error", err);
        resolve(result);
        con.release(); //releasing the connection back to the pool
      });
    });
  });
};
//getting plan recommendation based on the passed in budget
const getRecommendedServices = (
  hallPrice,
  zafehPrice,
  djPrice,
  beautyCentersPrice,
  flowersPrice,
  carsPrice
) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, con) {
      if (err) reject("connection err", err);
      console.log("Connected!");
      var sql = `SELECT capacity,description,imageUrl,location,price,rate,title,T2.name as category ,T1.id as serviceId , T1.providerID as providerID, T3.name AS providerName FROM services AS T1 JOIN categories AS T2 ON T1.categoryID = T2.id JOIN providers AS T3 ON T1.providerID  = T3.id WHERE ((T2.name = "Hall" AND  T1.price <= ${hallPrice}) OR (T2.name = "Zafeh" AND  T1.price <= ${zafehPrice}) OR (T2.name = "DJ" AND  T1.price <= ${djPrice}) OR (T2.name = "BeautyCenter" AND  T1.price <= ${beautyCentersPrice}) OR (T2.name = "Flower" AND  T1.price <= ${flowersPrice})  OR (T2.name = "Car" AND  T1.price <= ${carsPrice}))`;
      con.query(sql, function(err, result) {
        if (err) reject("query error", err);
        resolve(result);
        con.release(); //releasing the connection back to the pool
      });
    });
  });
};

const addService = (
  capacity,
  description,
  imageUrl,
  location,
  price,
  rate,
  title,
  providerID,
  categoryID
) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, con) {
      if (err) reject("connection err", err);
      console.log("Connected!");
      var sql = `INSERT INTO services (capacity,description,imageUrl,location,price,rate,title,providerID,categoryID) VALUES 
      ("${capacity}","${description}","${imageUrl}","${location}","${price}","${rate}","${title}","${providerID}","${categoryID}")`;
      con.query(sql, function(err, result) {
        if (err) reject("query error", err);
        console.log("1 record inserted");
        resolve(result);
        con.release(); //releasing the connection back to the pool
      });
    });
  });
};

const getProviderServices = providerId => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, con) {
      if (err) reject("get provider services connection err", err);
      con.query(
        `SELECT capacity,description,imageUrl,location,price,rate,title ,T2.name as providerName , T1.id as serviceID FROM services as T1 join providers as T2 on T1.providerID=T2.id where T2.id = "${providerId}"`,
        function(err, results) {
          if (err) reject("provider query error", err);
          //results is the returned array of objects
          resolve(results);
          con.release();
        }
      );
    });
  });
};
const deleteService = id => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, con) {
      if (err) reject("delete service connection err", err);
      con.query(`DELETE FROM services WHERE id = "${id}"`, function(
        err,
        results
      ) {
        if (err) reject("delete service query error", err);
        //results is the returned array of objects

        resolve(results);
        con.release();
      });
    });
  });
};

module.exports.addService = addService;
module.exports.getAllServices = getAllServices;
module.exports.getRecommendedServices = getRecommendedServices;
module.exports.getProviderServices = getProviderServices;
module.exports.deleteService = deleteService;
