const SendSuccess = (res, message, data = null, statusCode = 200) => {
    res.status(statusCode).json({
        status : true, 
        message, 
        data
    })
}
const SendSuccessAuth = (res, message, data = null, statusCode = 201, token = null) => {
    res.status(statusCode).json({
        status: true,
        message,
        data,
        token
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
    SendSuccessAuth,
    sendError
}