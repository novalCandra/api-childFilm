const pollMysql = require("../config/database")
const getModuleDataPaket = () => {
    const QueryGetData = `SELECT paket.id, users.username , paket.status 
    FROM paket INNER JOIN users ON paket.id_users=users.id`;
    return pollMysql.execute(QueryGetData)
}

const creteModuleDataPaket = (body) => {
    const cretateQuery = `INSERT INTO paket (id_users, status) VALUES ('${body.id_users}', '${body.status}')`;
    return pollMysql.execute(cretateQuery)
}

module.exports = {
    getModuleDataPaket,
    creteModuleDataPaket
}