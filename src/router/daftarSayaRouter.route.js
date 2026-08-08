const express = require("express")
const DaftarSayaRouter = express.Router();
const DaftarSayaController = require('../controller/DaftarSayaCotroller.controller');
const VerifyToken = require("../middleware/verifyToken");
DaftarSayaRouter.get("/daftarSaya", VerifyToken, DaftarSayaController.GetAllDaftarSaya)
DaftarSayaRouter.post("/daftarSaya", VerifyToken, DaftarSayaController.PostDaftarSaya)
DaftarSayaRouter.put("/daftarSaya/:id", VerifyToken, DaftarSayaController.updateDaftarSaya)
DaftarSayaRouter.delete("/daftarSaya/:id", VerifyToken, DaftarSayaController.DeleteDaftarSaya)
module.exports = DaftarSayaRouter