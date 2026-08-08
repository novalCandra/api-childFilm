const { getAllModelDaftarSaya, DeleteModelDaftarSaya, postModelDaftarSaya, updateModelDaftarSaya, getDetailUpdate } = require("../model/ModelDaftarSaya.model");
const pollDbMysql = require("../config/database");
const GetAllServiceDaftarSaya = async () => {
    const getDataDaftarSaya = await getAllModelDaftarSaya();
    return getDataDaftarSaya
}
const createServiceDaftarSaya = async (body) => {
    let connection;
    try {
        connection = await pollDbMysql.getConnection();
        await connection.beginTransaction();
        const [result] = await postModelDaftarSaya(body, connection)
        await connection.commit();
        return [result]
    } catch (error) {
        if (connection) {
            await connection.rollback()
        }
        throw error
    } finally {
        if (connection) {
            connection.release()
        }
    }
}
const updateServiceDaftarSaya = async (id, body) => {
    let connection
    try {
        connection = await pollDbMysql.getConnection();
        await connection.beginTransaction();
        const [result] = await updateModelDaftarSaya(id, body, connection)
        await connection.commit();
        return result
    } catch (error) {
        if (connection) {
            await connection.rollback()
        }
        throw error
    } finally {
        if (connection) {
            connection.release()
        }
    }
}

const updateSelectServiceDaftarSaya = async (id) => {
    const updateSelectDataDaftarSaya = await getDetailUpdate(id)
    return updateSelectDataDaftarSaya
}

const deleteServiceDaftarSaya = async (id) => {
    let connection;
    try {
        connection = await pollDbMysql.getConnection();
        await connection.beginTransaction();
        const [result] = await DeleteModelDaftarSaya(id, connection)
        await connection.commit();
        return result
    } catch (error) {
        if (connection) {
            connection.callback()
        }
        throw error
    } finally {
        if (connection) {
            connection.release()
        }
    }
}
module.exports = {
    GetAllServiceDaftarSaya,
    createServiceDaftarSaya,
    updateServiceDaftarSaya,
    updateSelectServiceDaftarSaya,
    deleteServiceDaftarSaya
}