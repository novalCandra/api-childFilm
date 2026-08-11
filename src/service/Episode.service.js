const { getDataEpisodeModule, createEpisodeModule, DeleteDataEpisodeModule } = require("../model/ModelEpisode.module")

const getDataServiceEpisode = async () => {
    const data = await getDataEpisodeModule();
    return data
}

const postDataServiceEpisode = async (body) => {
    const createData = await createEpisodeModule(body);
    return createData
}

const deleteDataServiceEpisode = async (id) => {
    const deleteData = await DeleteDataEpisodeModule(id);
    return deleteData
}

module.exports = {
    getDataServiceEpisode,
    postDataServiceEpisode,
    deleteDataServiceEpisode
}