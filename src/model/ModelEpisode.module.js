const pollMysql = require("../config/database");
const getDataEpisodeModule = () => {
    const queryDataEpisode = `SELECT episode.id, series.name as seriesName, episode.name, episode.image_link, episode.description, episode.rating FROM episode INNER JOIN series on episode.id_series=series.id`;
    return pollMysql.execute(queryDataEpisode)
}

const createEpisodeModule = (body) => {
    const createQueryEpisode = `INSERT INTO episode(id_series, name, image_link, description, rating)
    VALUES ('${body.id_series}', '${body.name}', '${body.image_link}', '${body.description}', '${body.rating}')`
    return  pollMysql.execute(createQueryEpisode)
}

const DeleteDataEpisodeModule = (id) => {
    const QueryDeleteData = `DELETE FROM episode WHERE id=${id}`
    return pollMysql.execute(QueryDeleteData)
}

module.exports = {
    getDataEpisodeModule,
    createEpisodeModule,
    DeleteDataEpisodeModule,
}