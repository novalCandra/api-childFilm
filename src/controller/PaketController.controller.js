const asyncHeadler = require("../handler/asyncHeaderl")
const { getDataPaketService, createDataPaketService } = require("../service/Paket.service")

const getPaketController = asyncHeadler(
    async (req, res) => {
        const [data] = await getDataPaketService()
        try {
            res.status(200).json({
                status: true,
                message: "success GET PAKET",
                data: data
            })
        } catch (error) {
            res.status(500).json({
                status: false,
                message: "terjadi kesalahan di api",
                messageError: error
            })
        }
    }
)

const createPaketController = asyncHeadler(
    async (req, res) => {
        const body = req.body;
        await createDataPaketService(body)
        try {
            res.status(200).json({
                status: true,
                message: "success Create PAKET",
                data: body
            })
        } catch (error) {
            res.status(500).json({
                status: false,
                message: "terjadi kesalahan di api",
                messageError: error
            })
        }
    }

)

module.exports = {
    getPaketController,
    createPaketController
}