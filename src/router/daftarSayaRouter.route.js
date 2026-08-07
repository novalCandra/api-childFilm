const express = require("express")
const DaftarSayaRouter = express.Router();
const DaftarSayaController = require('../controller/DaftarSayaCotroller.controller')
DaftarSayaRouter.get("/daftarSaya", DaftarSayaController.GetAllDaftarSaya)
DaftarSayaRouter.post("/daftarSaya",DaftarSayaController.PostDaftarSaya)
DaftarSayaRouter.put("/daftarSaya/:id", DaftarSayaController.updateDaftarSaya)
DaftarSayaRouter.delete("/daftarSaya/:id",DaftarSayaController.DeleteDaftarSaya)
module.exports = DaftarSayaRouter