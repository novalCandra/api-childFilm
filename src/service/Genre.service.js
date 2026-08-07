const { modelGetallGenre, modelCreateGenre, modelDeleteGenre } = require("../model/modelGenre.model")

const getAllServiceGenre = async () => {
    const getService = await modelGetallGenre();
    return getService
}

const postServiceGenre = async(body) => {
    const createService = await modelCreateGenre(body);
    return createService
}

const deleteServiceGenre = async(id) => {
    const deleteService = await modelDeleteGenre(id);
    return deleteService
}

module.exports = {
    getAllServiceGenre,
    postServiceGenre,
    deleteServiceGenre
}