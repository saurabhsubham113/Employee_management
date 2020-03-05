const mysql = require('mysql2')

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'subham@11',
    database:'employee',
    waitForConnections:true,
    connectionLimit:100,
    port:3306,
    queueLimit:0
})

module.exports = {
    connection: pool
}