var express = require("express");
const client = require("../../db");
const db = client.db("bet-prod");
var router = express.Router();

/* GET home page. */
router.get("/", require("./getTransactions"));

module.exports = router;
