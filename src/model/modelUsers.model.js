const pollMysql = require("../config/database");

const modelCreateLoginAccount = (username) => {
    const QueryLogin = `SELECT id, username, password FROM users WHERE username= ?`
    return pollMysql.execute(QueryLogin, [username])
}

const modelPostRegisterAccount = (body) => {
    const queryCreateUsers = `INSERT INTO users(username,email,password) VALUES('${body.username}', '${body.email}', '${body.password}')`;
    return pollMysql.execute(queryCreateUsers)
}

module.exports = {
    modelCreateLoginAccount,
    modelPostRegisterAccount
}