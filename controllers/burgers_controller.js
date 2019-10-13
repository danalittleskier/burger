var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/burgers", function(req, res) {
    burger.all(function(data) {
      var handlebarBurger = {
        burger: data
      };
      //console.log(handlebarBurger);
      res.render("index", handlebarBurger);
    });
  });

router.post("/api/burgers", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

module.exports = router;