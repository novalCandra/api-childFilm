const { getAllMovies, getDetilsMovies, deleteMovies, createMovies, updateMovies } = require("../model/ModelSeries.model")
const { GetAllSeriesService, getDetailsService, GetDetailsService, DeleteSeriesService, PostSeriesService, PutSeriesService } = require("../service/Series.service")

const GetAllSeriesController = async (req, res) => {
    const [data] = await GetAllSeriesService()
    try {
        res.status(200).json({
            status: true,
            message: "sucess GET ALL MOVIE",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "terjadi kesalahan di api",
            messageError: error
        })
    }
}

const GetDetailsMulterController = async (req, res) => {
    const { id } = req.params
    const [data] = await GetDetailsService(id)
    try {
        res.status(200).json({
            status: true,
            message: "sucess GET Details MOVIE",
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


const CreateDataSeries = async (req, res) => {
    const data = {
        ...req.body,
        image_link: `${req.protocol}://${req.get('host')}/assets/image/${req.file.filename}`
    }
    try {
        await PostSeriesService(data)
        return res.status(200).json({
            status: true,
            message: "sucess create movies",
            data: data
        })
    } catch (error) {
        console.log(error)
        res.json({
            status: false,
            message: "terjadi kesalahan di api",
            messageError: error
        })
    }
}


const UpdateDataSeries = async (req, res) => {
    const { id } = req.params;
    const body = {
        ...req.body,
        image_link: `${req.protocol}://${req.get('host')}/assets/image/${req.file.filename}`
    }
    try {
        await PutSeriesService(id, body);
        res.status(201).json({
            status: true,
            message: "Success Update Series",
            ...body
        })
    } catch (error) {
        console.log(error)
        return res.json({
            status: false,
            message: "terjadi kesalahan di api",
            messageError: error
        })
    }
}


const DeleteDataSeries = async (req, res) => {
    const { id } = req.params;
    await DeleteSeriesService(id)
    try {
        res.status(200).json({
            status: true,
            message: "Success Delete Movies",
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
    GetAllSeriesController,
    GetDetailsMulterController,
    CreateDataSeries,
    UpdateDataSeries,
    DeleteDataSeries
}