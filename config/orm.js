var connection = require("../config/connection.js");


var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ?? ";

        connection.query(queryString, [tableInput], function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },
    insertOne: function(tableInput, vals, cb) {
        var queryString = "INSERT INTO ?? SET ?" ;
        var newBurger  = {burger_name: vals};
        connection.query(queryString, [tableInput, newBurger], function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
      update: function(tableInput, condition, cb) {
        var queryString = "UPDATE ?? SET devoured=true WHERE id = "+condition;
       console.log("condition "+condition);

        connection.query(queryString, [tableInput], function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
}
module.exports = orm;