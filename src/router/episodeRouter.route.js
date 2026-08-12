const express = require("express");
const EpisodeRouter = express.Router();
const EpisodeController = require('../controller/EpisodeController.controller')
EpisodeRouter.get("/episode", EpisodeController.getEpisodeController)
EpisodeRouter.post("/episode", EpisodeController.createEpisodeController)
EpisodeRouter.delete("/episode/:id", EpisodeController.deleteEpisodeController)
module.exports = EpisodeRouter