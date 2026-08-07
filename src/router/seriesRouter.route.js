const express = require("express");
const SeriesRouter = express.Router();
const SeriesController = require('../controller/SeriesController.controller')
SeriesRouter.get("/movie", SeriesController.GetAllSeriesController)
SeriesRouter.get("/movie/:id", SeriesController.GetDetailsMulterController)
SeriesRouter.post("/movie", SeriesController.CreateDataSeries)
SeriesRouter.put("/movie/:id", SeriesController.UpdateDataSeries)
SeriesRouter.delete("/movie/:id", SeriesController.DeleteDataSeries)

module.exports = SeriesRouter