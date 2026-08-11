const express = require("express");
const OrderRouter = express.Router();
const ControllerOrder = require('../controller/OrderController.controller')
const VerifyToken = require("../middleware/verifyToken");
OrderRouter.get("/order", VerifyToken ,ControllerOrder.getOrderController)
OrderRouter.post("/order",VerifyToken, ControllerOrder.postOrderController)
module.exports = OrderRouter