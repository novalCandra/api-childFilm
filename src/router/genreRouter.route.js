const express = require('express');
const GenreRouter = express.Router();
const GenreController = require('../controller/GenreController.controller');
const VerifyToken = require('../middleware/verifyToken');
GenreRouter.get('/genre', VerifyToken, GenreController.GetAllGenre)
GenreRouter.post('/genre', VerifyToken, GenreController.createGenre)
GenreRouter.delete('/genre/:id', VerifyToken, GenreController.deleteGenre)
module.exports = GenreRouter