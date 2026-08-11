const express = require("express");
const paketRouter = express.Router();
const ControllerPaket = require("../controller/PaketController.controller");
const VerifyToken = require("../middleware/verifyToken");
paketRouter.get("/paket", VerifyToken, ControllerPaket.getPaketController)
paketRouter.post("/paket", VerifyToken ,ControllerPaket.createPaketController)
module.exports = paketRouter;