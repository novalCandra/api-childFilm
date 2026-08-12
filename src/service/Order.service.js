const { getOrderModel, createOrderModel } = require("../model/moduleOrder.module")

const GetOrderService = async() => {
    const getDataOrder = await getOrderModel();
    return getDataOrder
}

const PostOrderService = async(body) => {
    const createDataOrder = await createOrderModel(body)
    return createDataOrder
}

module.exports = {
    GetOrderService,
    PostOrderService
}