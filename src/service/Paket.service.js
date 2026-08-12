const { createPaketController } = require("../controller/PaketController.controller");
const { getModuleDataPaket, creteModuleDataPaket } = require("../model/ModelPaket.module")

const getDataPaketService = async () => {
    const getData = await getModuleDataPaket();
    return getData
}


const createDataPaketService = async(body) => {
    const createData = await creteModuleDataPaket(body);
    return createData
}

module.exports = {
    getDataPaketService,
    createDataPaketService
}