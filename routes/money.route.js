const express = require("express");
const moneyController = require("../controllers/money.controller");
const multer = require("multer");

const route = express.Router();
const upload = multer();


route.get("/:userId", moneyController.getMoneyByUserId);
route.post("/",upload.none(), moneyController.MoneyTransaction);
module.exports = route;
