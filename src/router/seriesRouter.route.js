const express = require("express");
const SeriesRouter = express.Router();
const SeriesController = require('../controller/SeriesController.controller');
const VerifyToken = require("../middleware/verifyToken");
SeriesRouter.get("/movie", VerifyToken, SeriesController.GetAllSeriesController)
SeriesRouter.get("/movie/:id", VerifyToken, SeriesController.GetDetailsMulterController)
SeriesRouter.post("/movie", VerifyToken, SeriesController.CreateDataSeries)
SeriesRouter.put("/movie/:id", VerifyToken, SeriesController.UpdateDataSeries)
SeriesRouter.delete("/movie/:id", VerifyToken, SeriesController.DeleteDataSeries)

module.exports = SeriesRouter