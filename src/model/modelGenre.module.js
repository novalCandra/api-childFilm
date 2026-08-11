const pollMysql = require("../config/database");

const modelGetallGenre = () => {
    const QueryAll = `SELECT genre.id, genre.name as genre_name, series.name as genre_series FROM genre INNER JOIN series ON genre.id_series=series.id`;
    return pollMysql.execute(QueryAll)
}

const modelCreateGenre = (body) => {
    const createQuery = `INSERT INTO genre(name, id_series) VALUES('${body.name}', '${body.id_series}')`;
    return pollMysql.execute(createQuery)
}

const modelDeleteGenre = (id, body) => {
    const deleteQuery = `DELETE FROM genre WHERE id=${id}`
    return pollMysql.execute(deleteQuery)
}

module.exports = {
    modelGetallGenre,
    modelCreateGenre,
    modelDeleteGenre
}