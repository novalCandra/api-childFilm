const { getAllMovies, getDetilsMovies, deleteMovies, createMovies, updateMovies } = require("../model/ModelSeries.model")

const GetAllSeriesService = async () => {
    const data = await getAllMovies()
    return data
}

const GetDetailsService = async (id) => {
    const dataDetails = await getDetilsMovies(id);
    return dataDetails
}

const PostSeriesService = async (data) => {
    const createSeries = await  createMovies(data)
    return createSeries
}

const PutSeriesService = async(id, data) => {
    const putSeries = await updateMovies(id, data)
    return putSeries
}

const DeleteSeriesService = async (id) => {
    const deleteSeries = await deleteMovies(id);
    return deleteSeries
}

module.exports = {
    GetAllSeriesService,
    GetDetailsService,
    PostSeriesService,
    PutSeriesService,
    DeleteSeriesService
}