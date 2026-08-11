const asyncHeadler = require("../handler/asyncHeaderl")
const { SendSuccess } = require("../helper/respon.helper")
const { GetOrderService, PostOrderService } = require("../service/Order.service")

const getOrderController = asyncHeadler(
    async (req, res) => {
        const [data] = await GetOrderService()
        try {
            SendSuccess(res, "SUCCESS GET ORDERS", data)
        } catch (error) {
            sendError(res, error)
        }
    }

)

const postOrderController = asyncHeadler(
    async (req, res) => {
        const body = req.body;
        await PostOrderService(body)
        try {
            SendSuccess(res, "SUCCESS POST ORDERS", data)
        } catch (error) {
            sendError(res, error)
        }
    }
)

module.exports = {
    getOrderController,
    postOrderController
}