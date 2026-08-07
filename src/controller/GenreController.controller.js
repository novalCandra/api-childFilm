const { getAllServiceGenre, deleteServiceGenre, postServiceGenre } = require("../service/Genre.service")
const GetAllGenre = async (req, res) => {
    const [data] = await getAllServiceGenre()
    try {
        return res.status(200).json({
            status: true,
            message: "success Get All Genre",
            data: data
        })
    } catch (error) {
        return res.json({
            status: false,
            message: "terjadi kesalahan di api",
            messageError: error
        })
    }
}

const createGenre = async (req, res) => {
    const body = req.body;
    await postServiceGenre(body)
    try {
        return res.status(201).json({
            status: true,
            message: "success Create Genre",
            ...body
        })
    } catch (error) {
        return res.json({
            status: false,
            message: "terjadi kesalahan di api",
            messageError: error
        })
    }
}

const deleteGenre = async (req, res) => {
    const { id } = req.params
    try {
        await deleteServiceGenre(id)
        return res.status(201).json({
            status: true,
            message: "success Delete Genre",
        })
    } catch (error) {
        return res.json({
            status: false,
            message: "terjadi kesalahan di api",
            messageError: error
        })
    }
}
module.exports = {
    GetAllGenre,
    createGenre,
    deleteGenre
}