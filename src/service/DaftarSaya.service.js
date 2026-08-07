const { getAllModelDaftarSaya, DeleteModelDaftarSaya, postModelDaftarSaya, updateModelDaftarSaya, getDetailUpdate } = require("../model/ModelDaftarSaya.model");

const GetAllServiceDaftarSaya = async () => {
    const getDataDaftarSaya = await getAllModelDaftarSaya();
    return getDataDaftarSaya
}

const createServiceDaftarSaya = async(body) => {
    const createDataDaftarSaya = await postModelDaftarSaya(body)
    return createDataDaftarSaya
}
const updateServiceDaftarSaya = async(id, body) => {
    const updateDataDaftarSaya = await updateModelDaftarSaya(id,body)
    return updateDataDaftarSaya
}

const updateSelectServiceDaftarSaya = async (id) => {
    const updateSelectDataDaftarSaya = await getDetailUpdate(id)
    return updateSelectDataDaftarSaya
}

const deleteServiceDaftarSaya = async (id) => {
    const deleteDataDaftarSaya = await DeleteModelDaftarSaya(id)
    return deleteDataDaftarSaya
}
module.exports = {
    GetAllServiceDaftarSaya,
    createServiceDaftarSaya,
    updateServiceDaftarSaya,
    updateSelectServiceDaftarSaya,
    deleteServiceDaftarSaya
}