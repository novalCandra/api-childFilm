const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("CHILD FILM API")
})

app.listen(port, () => {
    console.log(`API CHILD BERJALAN PADA PORT : ${port}`)
})