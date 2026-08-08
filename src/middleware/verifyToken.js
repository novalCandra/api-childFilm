const jwt = require("jsonwebtoken");
const fs = require("node:fs")
// KEY FILES
const privatekeys = fs.readFileSync(process.env.JWT_PRIVATE, 'utf8')
const publickeys = fs.readFileSync(process.env.JWT_PUBLIC, 'utf8')
const VerifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader)
            return res.status(401).json({
                status: false,
                message: "Authorization header is missing"
            });

        if (!authHeader.startsWith("JWT "))
            return res.status(401).json({
                status: false,
                message: "Authorization format must be: JWT <token>"
            });


        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, publickeys, { algorithms: ["PS256"] });

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            status: false,
            message: "Invalid or expired token",
            statusMessage: error
        });
    }
};

module.exports = VerifyToken;