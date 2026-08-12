const { getModelTransaksi } = require("../model/ModelTransaksi.module")

const getDataTransaksiService = async () => {
    const getDataService = await getModelTransaksi();
    return getDataService
}

const createDataTransaksiService = async (body) => {
    const createDataService = await getModelTransaksi(body)
    return createDataService
}

module.exports = {
    getDataTransaksiService,
    createDataTransaksiService
}