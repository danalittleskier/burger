var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(vals, cb) {
      orm.insertOne("burgers", vals, function(res) {
        cb(res);
      });
    },
    update: function(col, condition, cb) {
      orm.update("burgers", col, condition, function(res) {
        cb(res);
      });
    }
  };

module.exports = burger;