const { GetAllServiceDaftarSaya, deleteServiceDaftarSaya, createServiceDaftarSaya, updateServiceDaftarSaya, updateSelectServiceDaftarSaya } = require("../service/DaftarSaya.service")

const GetAllDaftarSaya = async (req, res) => {
    const [data] = await GetAllServiceDaftarSaya()
    try {
        res.status(200).json({
            status: true,
            message: "success GET ALL Daftar Saya",
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


const PostDaftarSaya = async (req, res) => {
    try {
        const body = req.body;
        const [result] = await createServiceDaftarSaya(body)
        res.status(201).json({
            status: true,
            message: "success POST Daftar saya",
            data: {
                id: result.insertId,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "terjadi kesalahan di api",
            messageError: error
        })
    }
}

const updateDaftarSaya = async (req, res) => {
    const { id } = req.params;
    const body = req.body
    await updateServiceDaftarSaya(id, body)
    const [rows] = await updateSelectServiceDaftarSaya(id)
    try {
        return res.status(201).json({
            status: true,
            message: "success PUT Daftar saya",
            data : rows[0]
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "terjadi kesalahan di api",
            messageError: error
        })
    }
}

const DeleteDaftarSaya = async (req, res) => {
    const { id } = req.params
    try {
        await deleteServiceDaftarSaya(id)
        res.status(201).json({
            status: true,
            message: "success Delete Daftar Saya"
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "terjadi kesalahan di api",
            messageError: error
        })
    }
}

module.exports = {
    GetAllDaftarSaya,
    DeleteDaftarSaya,
    updateDaftarSaya,
    PostDaftarSaya
}