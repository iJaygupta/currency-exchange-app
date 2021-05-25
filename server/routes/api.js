var express = require("express");
var currencyRouter = require("./currency");

var app = express();

app.use("/currency", currencyRouter);


module.exports = app;