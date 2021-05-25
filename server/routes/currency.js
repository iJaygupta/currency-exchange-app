var express = require("express");
const CurrencyController = require("../controllers/currency");

var router = express.Router();

router.get("/list", CurrencyController.getCurrencyList);



module.exports = router;