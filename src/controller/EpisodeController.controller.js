const asyncHeadler = require("../handler/asyncHeaderl")
const { SendSuccess, sendError } = require("../helper/respon.helper")
const { getDataEpisodeModule, DeleteDataEpisodeModule, createEpisodeModule } = require("../model/ModelEpisode.module")

const getEpisodeController = asyncHeadler(
    async (req, res) => {
        const [data] = await getDataEpisodeModule()
        try {
            SendSuccess(res, "sucess episode Alll", data)
        } catch (error) {
            sendError(res, error)
        }
    }
)

const createEpisodeController = asyncHeadler(
    async (req, res) => {
        const body = {
            ...req.body,
            image_link: `${req.protocol}://${req.get('host')}/assets/image/${req.file.filename}`
        };
        await createEpisodeModule(body)
        try {
            SendSuccess(res, "sucess Create episode", body)
        } catch (error) {
            sendError(res, error)
        }
    }
)

const deleteEpisodeController = asyncHeadler(
    async (req, res) => {
        const { id } = req.params
        await DeleteDataEpisodeModule(id)
        try {
            SendSuccess(res, "sucess Delete episode")
        } catch (error) {
            sendError(res, error)
        }
    }
)

module.exports = {
    getEpisodeController,
    createEpisodeController,
    deleteEpisodeController
}