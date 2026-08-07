const pollDbMysql = require("../config/database");
const getAllModelDaftarSaya = () => {
    const QueryAllDataDaftarSaya = `SELECT daftar_saya.id, users.username, series.name FROM daftar_saya INNER JOIN users ON daftar_saya.id_users=users.id INNER JOIN series ON daftar_saya.id_series = series.id`;
    return pollDbMysql.execute(QueryAllDataDaftarSaya)
}

const postModelDaftarSaya = (body) => {
    const QueryPost = `INSERT INTO daftar_saya (id_users, id_series) VALUES('${body.id_users}', '${body.id_series}')`;
    return pollDbMysql.execute(QueryPost)
}

const updateModelDaftarSaya = (id, body) => {
    const QueryUpdate = `UPDATE daftar_saya SET id_users='${body.id_users}', id_series='${body.id_series}' WHERE id=${id}`;
    return pollDbMysql.execute(QueryUpdate)
}

const getDetailUpdate = (id) => {
    const QueryUpdateDetail = `SELECT daftar_saya.id, users.username, series.name FROM daftar_saya INNER JOIN users ON daftar_saya.id_users=users.id INNER JOIN series ON daftar_saya.id_series = series.id where daftar_saya.id=${id}`
    return pollDbMysql.execute(QueryUpdateDetail)
}

const DeleteModelDaftarSaya = (id) => {
    const QueryDelete = `DELETE FROM daftar_saya where id=${id}`
    return pollDbMysql.execute(QueryDelete)
}

module.exports = {
    getAllModelDaftarSaya,
    postModelDaftarSaya,
    updateModelDaftarSaya,
    DeleteModelDaftarSaya,
    getDetailUpdate
}