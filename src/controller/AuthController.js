const AuthLoginController = (req, res) => {
    try {
        const {username, password} = req.body
        return res.json({
            message: "login success",
            data: {
                username  : username,
                password : password
            }
        })
    } catch (error) {
        return console.error(error)
    }
}


const AuthRegisterController = (req, res) => {
    try {
        console.log(req.body)
        res.json({
            message: "users success register",
            data: req.body
        })
    } catch (error) {
        return console.error(error)
    }
}


module.exports = {
    AuthLoginController,
    AuthRegisterController
}