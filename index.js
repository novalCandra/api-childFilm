require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;
const AuthRouter = require("./src/router/authRouter.route");
const SeriesRouter = require("./src/router/seriesRouter.route");
const upload = require("./src/middleware/UploadPhoto.middleware");
const DaftarSayaRouter = require('./src/router/daftarSayaRouter.route');
const GenreRouter = require('./src/router/genreRouter.route');
const paketRouter = require('./src/router/paketRouter.route');
const OrderRouter = require('./src/router/OrderRoute.route');
const TransaksiRoute = require('./src/router/Transaksi.route');
const EpisodeRouter = require('./src/router/episodeRouter.route');
const PlayListRouter = require('./src/router/playListRouter.route');
app.use(express.json())
// MULTER
app.use('/assets', express.static("public"))
app.use(upload.single("image_link"))
// MIDDLEWARE
app.get("/", (req, res) => {
    res.send("CHILD FILM API")
})
// AUTH
app.use("/api", AuthRouter)
app.use("/api", SeriesRouter)
app.use("/api", DaftarSayaRouter)
app.use("/api", GenreRouter)
app.use("/api", EpisodeRouter)
app.use("/api", PlayListRouter)
app.use("/api", paketRouter)
app.use("/api", OrderRouter)
app.use("/api", TransaksiRoute)
app.listen(port, () => {
    console.log(`API CHILD BERJALAN PADA PORT : ${port}`)
})