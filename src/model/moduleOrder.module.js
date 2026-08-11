const pollMysql = require("../config/database");
const getOrderModel = async() => {
    const queryGet = `SELECT * FROM orders`;
    return pollMysql.execute(queryGet)
}

const createOrderModel = async(body) => {
    const createPostQuery = `INSERT INTO orders (id_paket, metode_pembayaran)
    VALUES ('${body.id_paket}', '${body.metode_pembayaran}')
    `
    return pollMysql.execute(createPostQuery)
}

module.exports = {
    getOrderModel,
    createOrderModel
}