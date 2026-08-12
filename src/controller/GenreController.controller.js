const asyncHeadler = require("../handler/asyncHeaderl")
const { sendError, SendSuccess } = require("../helper/respon.helper")
const { getAllServiceGenre, deleteServiceGenre, postServiceGenre } = require("../service/Genre.service")
const GetAllGenre = asyncHeadler(
    async (req, res) => {
        const [data] = await getAllServiceGenre()
        try {
            SendSuccess(res, "sucess GET Genre data", data)
        } catch (error) {
            sendError(res, error)
        }
    }

)

const createGenre = async (req, res) => {
    const body = req.body;
    await postServiceGenre(body)
    try {
        SendSuccess(res, "sucess GET Genre data", body)
    } catch (error) {
        sendError(res, error)
    }
}

const deleteGenre = async (req, res) => {
    const { id } = req.params
    try {
        await deleteServiceGenre(id)
        SendSuccess(res, "sucess Delete Genre data")
    } catch (error) {
        sendError(res, error)
    }
}
module.exports = {
    GetAllGenre,
    createGenre,
    deleteGenre
}