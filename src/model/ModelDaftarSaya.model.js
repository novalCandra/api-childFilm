const getAllModelDaftarSaya = () => {
    const QueryAllDataDaftarSaya = `SELECT daftar_saya.id, users.username, series.name FROM daftar_saya INNER JOIN users ON daftar_saya.id_users=users.id INNER JOIN series ON daftar_saya.id_series = series.id`;
    return pollDbMysql.execute(QueryAllDataDaftarSaya)
}

const postModelDaftarSaya = (body, connection) => {
    const QueryPost = `INSERT INTO daftar_saya (id_users, id_series) VALUES('${body.id_users}', '${body.id_series}')`;
    return connection.execute(QueryPost)
}

const updateModelDaftarSaya = (id, body, connection) => {
    const QueryUpdate = `UPDATE daftar_saya SET id_users='${body.id_users}', id_series='${body.id_series}' WHERE id=${id}`;
    return connection.execute(QueryUpdate)
}

const getDetailUpdate = (id) => {
    const QueryUpdateDetail = `SELECT daftar_saya.id, users.username, series.name FROM daftar_saya INNER JOIN users ON daftar_saya.id_users=users.id INNER JOIN series ON daftar_saya.id_series = series.id where daftar_saya.id=${id}`
    return pollDbMysql.execute(QueryUpdateDetail)
}

const DeleteModelDaftarSaya = (id, connection) => {
    const QueryDelete = `DELETE FROM daftar_saya where id=${id}`
    return connection.execute(QueryDelete)
}

module.exports = {
    getAllModelDaftarSaya,
    postModelDaftarSaya,
    updateModelDaftarSaya,
    DeleteModelDaftarSaya,
    getDetailUpdate
}