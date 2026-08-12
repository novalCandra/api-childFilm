const express = require("express");
const PlayListRouter = express.Router();
const PlayListController = require('../controller/PlayListController.controller')
PlayListRouter.get("/playList", PlayListController.getPlayListController)
PlayListRouter.post("/playList", PlayListController.createPlayListController)
PlayListRouter.put("/playList/:id", PlayListController.updatePlayListController)
PlayListRouter.delete("/playList/:id", PlayListController.deletePlaylistController)
module.exports = PlayListRouter