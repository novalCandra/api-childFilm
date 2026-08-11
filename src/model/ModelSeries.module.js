const pollDBMysql = require('../config/database')
const getAllMovies = () => {
    const QuerySelect = "SELECT * FROM series";
    return pollDBMysql.execute(QuerySelect);
}

const getDetilsMovies = (id) => {
    const QuerySelectDetail = `SELECT * FROM series WHERE id=${id}`;
    return pollDBMysql.execute(QuerySelectDetail)
}

const createMovies = (body) => {
    const QueryCreate = `INSERT INTO series (name,cast,image_link,rating, description, top, premium, waktu_video) VALUES ('${body.name}', '${body.cast}', '${body.image_link}', '${body.rating}', '${body.description}', '${body.top}', '${body.premium}', '${body.waktu_video}')`;
    return pollDBMysql.execute(QueryCreate)
}

const updateMovies = (id, body) => {
    const QueryUpdate = `UPDATE series SET name='${body.name}', cast='${body.cast}', image_link='${body.image_link}', rating='${body.rating}', description='${body.description}', top='${body.top}', premium='${body.premium}', waktu_video='${body.waktu_video}' WHERE id=${id}`
    return pollDBMysql.execute(QueryUpdate)
}

const deleteMovies = (id) => {
    const QueryDeleteData = `DELETE FROM series WHERE id=${id}`
    return pollDBMysql.execute(QueryDeleteData)
}

module.exports = {
    getAllMovies, getDetilsMovies, createMovies, updateMovies, deleteMovies
}