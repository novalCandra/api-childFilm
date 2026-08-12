const asyncHeadler = require("../handler/asyncHeaderl")
const { getDataTransaksiService, createDataTransaksiService } = require("../service/Transaksi.service")

const getDataTransaksiController = asyncHeadler(
    async (req, res) => {
        const [data] = await getDataTransaksiService()
        try {
            SendSuccess(res, "sucess GET Transaksi", data)
        } catch (error) {
            sendError(res, error)
        }
    }
)

const createTransaksiController = async (req, res) => {
    const body = req.body;
    await createDataTransaksiService(body)
    try {
        SendSuccess(res, "sucess POST Transaksi", data)
    } catch (error) {
        sendError(res, error)
    }
}

module.exports = {
    getDataTransaksiController,
    createTransaksiController
}