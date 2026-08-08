const jwt = require("jsonwebtoken");

const VerifyToken = (req, res, next) => {
    const secretKey = process.env.JWT_SECRETKEY ?? "";

    if (!secretKey) {
        return res.status(500).json({
            status: false,
            message: "JWT secret key is not configured"
        });
    }
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

        const decoded = jwt.verify(token, secretKey);

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