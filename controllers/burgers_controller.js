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

router.put("/api/burgers/:id", function(req, res) {

  burger.update(req.body.devoured, req.params.id,
    function(result) {
      console.log(result);
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});


module.exports = router;