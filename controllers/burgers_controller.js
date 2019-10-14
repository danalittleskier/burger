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

router.put("/api/burgers", function(req, res) {

  burger.update(req.body.burgerId, function(result) {
     
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.redirect(303, "/");

    }
  );
});

router.get("/", function(req, res) {
  burger.all(function(data) {
    var handlebarBurger = {
      burger: data
    };
    //console.log(handlebarBurger);
    res.render("index", handlebarBurger);
  });
});

module.exports = router;