var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/burgers", function(req, res) {
    burger.all(function(data) {
      var handlebarBurger = {
        burger: data
      };
      console.log(handlebarBurger);
      res.render("index", handlebarBurger);
    });
  });

module.exports = router;