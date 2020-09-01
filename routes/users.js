var express = require('express');
var router = express.Router();
var db = require("../db");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({name: "Rambahal Gaur"});
});

module.exports = router;
