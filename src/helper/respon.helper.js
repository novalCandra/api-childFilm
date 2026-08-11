const SendSuccess = (res, message, data = null, statusCode = 200) => {
    res.status(statusCode).json({
        status : true, 
        message, 
        data
    })
}


const sendError = (res, message, statusCode = 500) => {
    res.status(statusCode).json({
        status :false,
        message
    })
}


module.exports = {
    SendSuccess,
    sendError
}