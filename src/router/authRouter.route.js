const express = require("express");
const AuthController= require("../controller/AuthController.controller");
const { ValidasiMiddleware } = require("../middleware/middleware");
const AuthRouter = express.Router();
AuthRouter.post("/login", AuthController.AuthLoginController)
AuthRouter.post("/register", AuthController.AuthRegisterController)
module.exports = AuthRouter;