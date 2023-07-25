const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/* GET users listing. */
router.get("/cool", function (req, res, next) {
  res.send("you are so cool");
});

/* GET users listing. */
router.get("/cool/beach", function (req, res, next) {
  res.send("yo amo plaia");
});

/* GET users listing. */
router.get("/ifc", function (req, res, next) {
  res.send("welcome to high school");
});

module.exports = router;
