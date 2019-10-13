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
      update: function(tableInput, col, condition, cb) {
        var queryString = "UPDATE ?? SET devoured = ? WHERE id = ?"
       
      console.log("table "+ tableInput+"col "+col +" condition "+condition);
        connection.query(queryString, [tableInput, col, condition], function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
}
module.exports = orm;