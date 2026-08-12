const pollMysql = require('../config/database');
const getModelTransaksi = () => {
    const QueryGetData = `SELECT * FROM pembayaran`;
    return pollMysql.execute(QueryGetData)
}

const createTransaksiModel = (body) => {
    const QueryCreaetCategories = `INSERT INTO pembayaran(id_order, time_pembayaran)
    VALUES ('${body.id_order}', '${body.time_pembayaran}')`;
    return pollMysql.execute(QueryCreaetCategories)
}

module.exports = {
    getModelTransaksi,
    createTransaksiModel
}