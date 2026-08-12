const asyncHeadler = require("../handler/asyncHeaderl");
const { sendError, SendSuccess } = require("../helper/respon.helper");
const { getPlayList, deletePlayList, createlayListModel, updatePlayListModel } = require("../model/ModelPlayList.module")

const getPlayListController = asyncHeadler(
    async (req, res) => {
        const [data] = await getPlayList();
        try {
            SendSuccess(res, "sucess GET Playlist data", data)
        } catch (error) {
            sendError(res, error)
        }
    }
)


const createPlayListController = async (req, res) => {
    const {
        judul_playList,
        name,
        seriesIds
    } = req.body;
    const image_link = `${req.protocol}://${req.get("host")}/assets/image/${req.file.filename}`;
    const playlistId = await createlayListModel(
        judul_playList,
        name,
        image_link,
        seriesIds
    );
    try {
        res.status(200).json({
            status: true,
            message: "success Post PlayList",
            data: {
                playlistId: {
                    playlistId,
                    judul_playList,
                    name,
                    image_link
                }
            }
        })
    } catch (error) {
        sendError(res, error)
    }
}

const updatePlayListController = async (req, res) => {
    const { id } = req.params;
    let { judul_playList, name, seriesIds } = req.body;
    const image_link = `${req.protocol}://${req.get("host")}/assets/image/${req.file.filename}`;
    const body = {
        judul_playList,
        name,
        image_link
    }

    await updatePlayListModel(
        id, body, seriesIds
    )
    try {
        res.status(201).json({
            status: true,
            message: "sucess update data",
            data: {
                id, judul_playList, name, image_link, seriesIds
            }
        })
    } catch (error) {
        sendError(res, error)
    }
}

const deletePlaylistController = asyncHeadler(
    async (req, res) => {
        const { id } = req.params;
        await deletePlayList(id)
        try {
            SendSuccess(res, "sucess Delete Playlist data")
        } catch (error) {
            sendError(res, error)
        }
    }
)

module.exports = {
    getPlayListController,
    createPlayListController,
    updatePlayListController,
    deletePlaylistController
}