const pollMysql = require("../config/database");

const getPlayList = async () => {
    const queryAllData = `SELECT playlistusers.id, playlist.judul_playList, playlist.image_link, playlist.name as UsernamePlayList, series.name as seriesName from playlistusers INNER JOIN playlist ON playlistusers.id_playList=playlist.id
    INNER JOIN series ON playlistusers.id_series=series.id`
    return pollMysql.execute(queryAllData)
}

const createlayListModel = async (judul_playList, name, image_link, seriesIds) => {
    const [playlistCreate] = await pollMysql.execute(
        `INSERT INTO playlist (judul_playList, name, image_link)
        VALUES (?, ?, ?)`,
        [judul_playList, name, image_link]
    )
    const playListId = playlistCreate.insertId;
    for (const seriesId of seriesIds) {
        await pollMysql.execute(
            `INSERT INTO playlistusers (id_playList, id_series)
            VALUES (?, ?)`,
            [playListId, seriesId]
        )
    }
    return playListId
}

const updatePlayListModel = async (id, body, seriesIds) => {
    const [updatePlayList] = await pollMysql.execute(
        `UPDATE playlist set judul_playList= ?, name=?, image_link=?
        WHERE id = ?`,
        [
            body.judul_playList,
            body.name,
            body.image_link,
            id
        ]
    );

    for (const seriesId of seriesIds) {
        await pollMysql.execute(
            `
            INSERT INTO playlistusers
            (id_playList, id_series)
            VALUES (?, ?)
            `,
            [id, seriesId]
        )
    }
    return updatePlayList.affectedRows
}

const deletePlayList = async (id) => {
    const [pivotResult] = await pollMysql.execute(
        `DELETE FROM playlistusers WHERE id = ? `,
        [id]
    );
    const [playlistResult] = await pollMysql.execute(
        `
        DELETE FROM playlist
        WHERE id = ?
        `,
        [id]
    );
    return playlistResult;
}

module.exports = {
    getPlayList,
    createlayListModel,
    updatePlayListModel,
    deletePlayList
}