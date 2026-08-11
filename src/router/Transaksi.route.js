const express = require("express");
const TransaksiRoute = express.Router();
const TransaksiController = require('../controller/TransaksiController.controller');
const VerifyToken = require("../middleware/verifyToken");
TransaksiRoute.get("/transaksi", VerifyToken, TransaksiController.getDataTransaksiController)
TransaksiRoute.post("/transaksi", VerifyToken, TransaksiController.createTransaksiController)
module.exports = TransaksiRoute