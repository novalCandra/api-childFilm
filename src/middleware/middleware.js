const ValidasiMiddleware = (req, res, next) => {
    try {
        req.body()
        next()
    } catch (error) {
        return console.error(error)
    }
}

module.exports = {
    ValidasiMiddleware
}