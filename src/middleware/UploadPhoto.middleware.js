const multer = require("multer");
const path = require("node:path")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/image')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    }
})

const upload = multer(
    {
        storage: storage,
        limits: {
            fieldSize: 5 * 1000 * 1000
        }
    }
)

module.exports = upload