const mysql = require('mysql2')

const pool = mysql.createPool({
    host:'sql12.freemysqlhosting.net',
    user:'sql12325193',
    password:'xNiduixDNj',
    database:'employee',
    waitForConnections:true,
    connectionLimit:100,
    port:3306,
    queueLimit:0
})

module.exports = {
    connection: pool
}