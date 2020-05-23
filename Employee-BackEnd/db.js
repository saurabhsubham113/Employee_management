const mysql = require('mysql2')

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'PROCESS.env.PORT',
    database:'employee',
    waitForConnections:true,
    connectionLimit:100,
    port:3306,
    queueLimit:0
})

module.exports = {
    connection: pool
}
