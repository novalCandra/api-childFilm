const express = require("express");
const app = express();
const port = 3000;
const AuthRouter = require("./src/router/authRouter");
app.use(express.json())
// MIDDLEWARE
app.get("/", (req, res) => {
    res.send("CHILD FILM API")
})
// AUTH
app.use("/api", AuthRouter)
app.listen(port, () => {
    console.log(`API CHILD BERJALAN PADA PORT : ${port}`)
})