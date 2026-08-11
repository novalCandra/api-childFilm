const asyncHeadler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
}

module.exports = asyncHeadler