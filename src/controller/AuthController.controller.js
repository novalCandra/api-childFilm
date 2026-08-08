const { modelPostRegisterAccount, modelCreateLoginAccount } = require("../model/modelUsers.model");
const jwt = require("jsonwebtoken");
let token = jwt.sign({ foor: "bar" }, 'shhh');
const bcyrpt = require("bcrypt");
const saltRounds = 10;

const fs = require("node:fs")
// KEY FILES
const privatekeys = fs.readFileSync(process.env.JWT_PRIVATE, 'utf8')
const publickeys = fs.readFileSync(process.env.JWT_PUBLIC, 'utf8') 

const AuthLoginController = async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(400).json({
                status: false,
                message: "username and passowrd required"
            })
        }
        const [data] = await modelCreateLoginAccount(username, password);
        if (!data || data.length === 0) {
            return res.status(404).json({
                message: "user not found"
            })
        }
        const user = data[0];

        const passwordHash = await bcyrpt.compare(
            password,
            user.password
        )

        if (!passwordHash) {
            return res.status(401).json({
                status: false,
                message: "Wrong password"
            })
        }

        const token = jwt.sign(
            {
                id: user.id,
                username: user.username
            },
            privatekeys,
            {
                algorithm: "PS256",
                expiresIn: "1d"
            },
        )
        return res.json({
            message: "login success",
            data: {
                id: user.id,
                username: user.username,
                password: user.password
            },
            token
        })
    } catch (error) {
        return console.error(error)
    }
}

const AuthRegisterController = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const passwordHash = await bcyrpt.hashSync(password, saltRounds)
        await modelPostRegisterAccount({
            username,
            email,
            password: passwordHash
        })
        res.json({
            message: "users success register",
            data: {
                username,
                email,
                password
            }
        })
    } catch (error) {
        return console.error(error)
    }
}


module.exports = {
    AuthLoginController,
    AuthRegisterController
}