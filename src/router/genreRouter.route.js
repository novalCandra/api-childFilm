const express = require('express');
const GenreRouter = express.Router();
const GenreController = require('../controller/GenreController.controller')
GenreRouter.get('/genre', GenreController.GetAllGenre)
GenreRouter.post('/genre', GenreController.createGenre)
GenreRouter.delete('/genre/:id', GenreController.deleteGenre)
module.exports = GenreRouter